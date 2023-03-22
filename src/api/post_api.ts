import { ID, Permission, Query, Role } from "appwrite";
import { UploadUserFile } from "element-plus";
import { account, databases, storage } from ".";
import { COLLECTIONS, DATABASES, imageUrl } from "../constants/config";
import { HotPostModel, transHotPosts } from "../model/HotPostModel";
import { PostModel, transPost, transPosts } from "../model/PostModel";
import { ScrollPostModel, transScrollPosts } from "../model/ScrollPostModel";
import { useGlobalStore } from "../stores/globalStore";
import { getUser } from "./user_api";

const globalStore = useGlobalStore()

export async function getPosts(offset?: number, type?:number, uid?:string):Promise<PostModel[] | null> {
  try {
    let query:string[] = [Query.orderDesc("$createdAt")]
    if(offset!=undefined){
      query.push(Query.limit(5))
      query.push(Query.offset(offset))
    }
    if(type!=undefined && type!=0){
      query.push(Query.equal('type', type),)
    }
    if(uid!=undefined){
      query.push(Query.equal('uid', uid),)
    }
    let  data = await databases.listDocuments(DATABASES.feed, COLLECTIONS.feed_post,query)

    let posts = transPosts(data.documents)
    for(let i in posts){
      const user = await getUser(posts[i].uid) 
      if(user){
        posts[i].user = user
      }
      if( posts[i].likes.indexOf(globalStore.account_!.$id)==-1){
        posts[i].liked = false
      }else{
        posts[i].liked = true
      }
    }
      // console.log("posts", posts)//blogs still empty
      return posts
  } catch(err) {
      return null
  }
}


  export async function createPost(data: PostModel) {
    try {
      const userID = data.uid;
      const response = await databases.createDocument(
        DATABASES.feed,
        COLLECTIONS.feed_post,
        "unique()",
        data,
        [
          Permission.read(Role.any()),
          Permission.write(Role.user(userID)),
        ]
      );
      console.log("create post success");
      return true;
    } catch (e) {
      console.log("Could not create document", e);
      return false;
    }
  }


  export async function likePost(data: PostModel) {
    try {
      const index = data.likes.indexOf(globalStore.account_!.$id)
      if(index == -1){
        // console.log("no exist")
        data.likes.push(globalStore.account_!.$id)
      }else{
        // console.log("exist", data.likes)
        data.likes.splice(index, 1)
        // console.log("exist1", data.likes)
      }
      const response = await databases.updateDocument(
        DATABASES.feed,
        COLLECTIONS.feed_post,
        data.id!,
        {"likes":data.likes}
      );
      console.log("create post success");
      return true;
    } catch (e) {
      console.log( e);
      return false;
    }
  }

  export async function getHotPosts():Promise<HotPostModel[] | null> {
    try {
        let posts = await databases.listDocuments(DATABASES.feed_list, COLLECTIONS.feed_hot)
  
        // console.log("posts", data.documents)//blogs still empty
        return transHotPosts(posts.documents)
    } catch(err) {
        if (err == 'Error: Unauthorized') return null;
        return null
    }
  }

  export async function getScrollPosts():Promise<ScrollPostModel[] | null> {
    try {
        let posts = await databases.listDocuments(DATABASES.feed_list, COLLECTIONS.feed_scroll)
        // console.log("posts", data.documents)//blogs still empty
        return transScrollPosts(posts.documents)
    } catch(err) {
        if (err == 'Error: Unauthorized') return null;
        return null
    }
  }
import { ID, Permission, Query, Role } from "appwrite";
import { UploadUserFile } from "element-plus";
import { account, databases, storage } from ".";
import { COLLECTIONS, DATABASES, imageUrl } from "../constants/config";
import { BlogModel, transBlogs } from "../model/BlogModel";
import { PostModel, transPost, transPosts } from "../model/PostModel";
import { useGlobalStore } from "../stores/globalStore";
import { getUser } from "./user_api";

const globalStore = useGlobalStore()
export async function getBlogs(offset?: number, type?:number, uid?:string):Promise<BlogModel[] | null> {
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
    let  data = await databases.listDocuments(DATABASES.feed, COLLECTIONS.feed_blog,query)

    const blogs = transBlogs(data.documents)
    for(let i in blogs){
      const user = await getUser(blogs[i].uid) 
      if(user){
        blogs[i].user = user //Blog user data
      }
      if(globalStore.account_){
        if( blogs[i].likes.indexOf(globalStore.account_!.$id)==-1){
          blogs[i].liked = false
        }else{
          blogs[i].liked = true
        }
      }else{
        blogs[i].liked = false
      }

    }
      // console.log("blogs:", blogs)//blogs still empty
      return blogs
  } catch(err) {
      if (err == 'Error: Unauthorized') return null;
      return null
  }
}


  export async function createBlog(data: BlogModel) {
    try {
      const userID = data.uid;
      const response = await databases.createDocument(
        DATABASES.feed,
        COLLECTIONS.feed_blog,
        "unique()",
        data,
        [
          Permission.read(Role.user(userID)),
          Permission.write(Role.user(userID)),
        ]
      );
      console.log("create blog success");
      return true;
    } catch (e) {
      console.log("Could not create document", e);
      return false;
    }
  }




  export async function likeBlog(data: BlogModel) {
    try {
      // console.log("likes", data.likes)
      // console.log("id", globalStore.account_.$id)
      const index = data.likes.indexOf(globalStore.account_!.$id)
      // console.log("index", index)
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
        COLLECTIONS.feed_blog,
        data.id!,
        {"likes":data.likes}
      );
      return true;
    } catch (e) {
      return false;
    }
  }
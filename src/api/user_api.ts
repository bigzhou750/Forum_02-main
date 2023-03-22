import { Permission, Query, Role } from "appwrite";
import { UploadUserFile } from "element-plus";
import { databases, storage } from ".";
import { COLLECTIONS, DATABASES, imageUrl } from "../constants/config";
import { CommentModel, transComments } from "../model/CommentModel";
import { transUser, UserModel } from "../model/UserModel";
import { HeaderNavType, useGlobalStore } from "../stores/globalStore";

const globalStore = useGlobalStore()

export async function getUser(uid: string):Promise<UserModel | null> {
    try {
        const data = await databases.getDocument(DATABASES.accounts, COLLECTIONS.user_public, uid)
        return transUser(data)

    } catch(err) {
        console.log("Get user data failed.")
        return null
    }
}

export async function getComments(offset: number, commentsID: string[]):Promise<CommentModel[] | null> {
    try {
       const data = await databases.listDocuments(DATABASES.feed, COLLECTIONS.feed_comment,[
          Query.limit(5),
          Query.offset(offset),
          Query.orderDesc("$createdAt"),
          Query.equal('$id', commentsID),
      ])

  
      let comments = transComments(data.documents)
      for(let i in comments){
        const user = await getUser(comments[i].uid) 
        if(user){
            comments[i].user = user
        }
        if(globalStore.account_!.$id in comments[i].likes){
            comments[i].liked = true
        }else{
            comments[i].liked = false
        }
      }
        // console.log("posts", data.documents)//blogs still empty
        return comments
    } catch(err) {
        return null
    }
  }
  
  
    export async function createComment(data: CommentModel, type: string, id: string, comments: string[]) {
      try {
        const userID = data.uid;
        const response = await databases.createDocument(
          DATABASES.feed,
          COLLECTIONS.feed_comment,
          "unique()",
          data,
          [
            Permission.read(Role.any()),
            Permission.write(Role.user(userID)),
          ]
        );
        comments.push(response.$id)
        await databases.updateDocument(
            DATABASES.feed,
            type,
            id,
            {"comments":comments}
          );
        console.log("create comment success");
        return true
      } catch (e) {
        console.log("Could not create comment", e);
        return false
      }
    }
  
  
    export async function uploadImages(images: UploadUserFile[]) {
      if (images) {
        var i:number = 0;
        let res: string[]=[];
        try{
          for(i; i<images.length; i++){
            let response = await storage.createFile("test","unique()",images[i].raw!, [
              // Permission.read(Role.user(userID)),
              // Permission.write(Role.user(userID)),
            ]);
  
                // console.log("response", response); // Success
                // this.uploading = false
                // this.$emit("refreshData")
                const url = response.$id.toString()
                res.push(url)
            
          }
          console.log(res)
          return res
        } catch (e) {
          console.log("Could not create document", e);
          return null
        }
    }
    }
  
  
    export async function likeComment(data: CommentModel) {
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
          COLLECTIONS.feed_comment,
          data.id!,
          {"likes":data.likes}
        );
        console.log("like comment success");
        return true;
      } catch (e) {
        console.log( e);
        return false;
      }
    }

export function getDuration(time:string):string{

       let date1:Date = new Date();
       let date2:Date = new Date(time);

       let diff:number = date1.getTime() - date2.getTime();

       let res:number = Math.floor(diff / 3600000);
        if(res == 0){
          return `• Few minutes ago`
      }
      else if(res < 24){
          return `• ${res} hours ago`
      }
      else{
          return `• ${Math.floor(res / 24) } days ago`
      }
      
}

export function showInfo(user: UserModel){
  globalStore.HeaderUser = user
  globalStore.type = HeaderNavType.Info
  globalStore.showHeader = true
}

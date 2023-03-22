import { UserModel } from "./UserModel";

export interface CommentModel {
    user?: UserModel;
    uid: string
    id?: string;
    createdAt?: string;
    content: string;
    imageLinks: string[];
    likes: string[];
    comments: string[];
    anonymity: boolean;
    liked?: boolean
  }

  export function transComment(data: any){
    const res: CommentModel = {
      uid: data.uid,
      id: data.$id,
      createdAt: data.$createdAt,
      content: data.content,
      imageLinks: data.imageLinks,
      likes: data.likes,
      comments: data.comments,
      anonymity: data.anonymity,
    } 
    return res
  }

  export function transComments(data: any){
    let res:CommentModel[] = []
    for(let item of data){
      res.push(transComment(item))
    }
    return res
  }
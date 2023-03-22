import { UserModel } from "./UserModel";

export interface PostModel {
    user?: UserModel;
    uid: string;
    id?: string;
    createdAt?: string;
    content: string;
    imageLinks: string[];
    shareCount: number;
    likes: string[];
    comments: string[];
    viewCount: number;
    anonymity: boolean;
    liked?: boolean;
    type: number
  }

  export function transPost(data: any){
    const res: PostModel = {
      id: data.$id,
      uid: data.uid,
      createdAt: data.$createdAt,
      content: data.content,
      imageLinks: data.imageLinks,
      shareCount: data.shareCount,
      likes: data.likes,
      comments: data.comments,
      viewCount: data.viewCount,
      anonymity: data.anonymity,
      type: data.type
    } 
    return res
  }

  export function transPosts(data: any){
    let res:PostModel[] = []
    for(let item of data){
      res.push(transPost(item))
    }
    return res
  }

  
export enum PostType {
  "Latested",
  "Study abroad",
  Help,
  Culture,
  Travel,
};
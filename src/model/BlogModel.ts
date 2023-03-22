import { UserModel } from "./UserModel";

export interface BlogModel {
    user?: UserModel;
    uid: string
    id?: string;
    createdAt?: string;
    title: string;
    content: string;
    // imageLinks: string[];
    shareCount: number;
    likes: string[];
    comments: string[];
    viewCount: number;

    liked?: boolean
  }

  export function transBlog(data: any){
    const res: BlogModel = {
      uid: data.uid,
      id: data.$id,
      createdAt: data.$createdAt,
      title: data.title,
      content: data.content,
      // imageLinks: data.imageLinks,
      shareCount: data.shareCount,
      likes: data.likes,
      comments: data.comments,
      viewCount: data.viewCount
    } 
    return res
  }

  export function transBlogs(data: any){
    let res:BlogModel[] = []
    for(let item of data){
      res.push(transBlog(item))
    }
    return res
  }
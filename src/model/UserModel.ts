export interface UserModel {
    uid: string;
    name: string;
    portraitImage?: string;
    profileImage?: string;
    createdAt?: string;
  }

  export function transUser(data: any){
    const res: UserModel = {
        uid: data.uid,
        name: data.name,
        createdAt: data.$createdAt,
        portraitImage: data.portraitImage,
        profileImage: data.profileImage
    } 
    return res
  }


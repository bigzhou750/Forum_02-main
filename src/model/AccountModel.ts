export interface AccountModel {
    uid: string;
    name: string;
    portraitImage: string;
    profileImage: string;
    email: string;
    phoneNum: string;
    createdAt: string;
    certified: string;
    realName: string;
    studentID: string;
    school: string;
    majoy: string;
    grade: string;
  }

  export function transAccount(data: any){
    const res: AccountModel = {
      uid: data.uid,
      name: data.name,
      portraitImage: data.portraitImage,
      profileImage: data.profileImage,
      email: data.email,
      phoneNum: data.phoneNum,
      createdAt: data.$createdAt,
      certified: data.certified,
      realName: data.realName,
      studentID: data.studentID,
      school: data.school,
      majoy: data.majoy,
      grade: data.grade
    } 
    return res
  }

  
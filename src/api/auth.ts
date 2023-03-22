import { ElMessage } from "element-plus";
import { tr } from "element-plus/es/locale";
import { account, avatars, databases, functions, storage } from "../api";
import { COLLECTIONS, DATABASES } from "../constants/config";
import { AccountModel, transAccount } from "../model/AccountModel";
import { FunctionResponseModel } from "../model/FunctionResponseModel";
import { useGlobalStore } from "../stores/globalStore";

const globalStore = useGlobalStore()
export async function login(email: string, password: string) {
    try{
        const res = await account.createEmailSession(email, password);
        console.log(res)
        return await getAccount()
    }
    catch(e){
        console.log("Error getting Account", e);
        return false
    }
  }

  export function socialLogin(platform: string){
    try{
        account.createOAuth2Session(platform, "https://www.chinaceecsf.com/home", "https://www.chinaceecsf.com/home");
    }catch(e){
        ElMessage.error(e.message)
    }
    
  }

 export async function register(username: string, email: string, password: string):Promise<boolean> {
    try {
        // const data = {"name":username, "email":email, "password":password}
        const res = await account.create("unique()", email, password, username);
        // const res_ = await account.createMagicURLSession("unique()", "7756748@qq.com")
        // console.log("registre", res)
        // const res = await functions.createExecution('register', JSON.stringify(data));
        // console.log("register", res)
        await account.createEmailSession(email, password);
        return await checkLogin()
    } catch(error) {
      console.error(error);
    //   return {"code":-2, "message": "Network error!"};
        return false
    } 
  }

export async function logout() {
    const res = await account.deleteSessions()
    globalStore.account = null
    return true
}

export async function checkLogin() {
    try {
        const res = await account.get();
        globalStore.account_ = res
        return true
    } catch(err) {
        // if (err == 'Error: Unauthorized') return;
        // console.error(err);
        return false
    }
}

export async function checkAccount() {
    const res = await functions.createExecution('checkAccount', JSON.stringify(globalStore.account_));
    console.log("check account:", res)
    const accountData = await databases.getDocument(DATABASES.accounts, COLLECTIONS.user_account, res.$id)
    globalStore.account = transAccount(accountData)
}

export async function getAccount():Promise<boolean> {
    try {
        const res = await account.get();
        globalStore.account_ = res
        const accountData = await databases.getDocument(DATABASES.accounts, COLLECTIONS.user_account, res.$id)
        // console.log("accountData", accountData)
        // console.log("accountData", transAccount(accountData))
        globalStore.account = transAccount(accountData)
        if(globalStore.account.portraitImage==null){
            globalStore.account.portraitImage = avatars.getInitials().href
        }
        // console.log(globalStore.account.portraitImage)
        return true
    } catch(err) {
        console.log("code",err)
        // await checkAccount()
        return false
    }
}


export async function updateAccount(data: Object):Promise<FunctionResponseModel> {
    try {
        const res = await functions.createExecution('updateAccount', JSON.stringify(data));
        // console.log("data", data)
        // console.log("register", res)
        // console.log("return", JSON.parse(res.response))
        return JSON.parse(res.response)
    } catch(error) {
      console.error(error);
      return {"code":-2, "message": "Network error!"};
    } 
  }
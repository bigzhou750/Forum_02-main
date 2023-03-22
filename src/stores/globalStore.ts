import type{ Models } from "appwrite/types";
import { defineStore } from "pinia";
import { getAccount } from "../api/auth";
import type{ AccountModel } from "../model/AccountModel";
import { BlogModel } from "../model/BlogModel";
import { PostModel } from "../model/PostModel";
import { UserModel } from "../model/UserModel";

export enum SidebarView {
  LoginView = "LoginView",
  RegisterView = "RegisterView",
  UploadPortraitView = "UploadPortraitView",
  MyHomeView = "MyHomeView",
}

export enum HeaderNavType{
  Info,
  Post,
  Blog,
}

interface State {
  sidebarView: SidebarView;
  showSidebar: boolean;
  account_:  Models.Account<any> | null;
  account:  AccountModel | null//Models.Account<any>;

  //Header Nav
  showHeader: boolean
  type: HeaderNavType | null
  HeaderUser: UserModel | null
  HeaderPost: PostModel | null
  HeaderBlog: BlogModel | null
}
export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      sidebarView: SidebarView.LoginView,
      showSidebar: true,
      account_: null,
      account: null,

      showHeader: false,
      type: null,
      HeaderUser: null,
      HeaderPost: null,
      HeaderBlog: null,

    } as State;
  },

  actions: {
    setSidebarView(view: SidebarView) {
      this.sidebarView = view;
    },
    // showSideBar(show: boolean){
    //   this.showsidebar = show;
    // },
    // async setAccount(data: AccountModel){
    //   this.account = data;
    // }
  },
});

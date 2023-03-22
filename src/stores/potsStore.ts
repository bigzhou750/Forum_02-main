import { type } from "os";
import { defineStore } from "pinia";
import { getHotPosts, getPosts, getScrollPosts } from "../api/post_api";
import { HotPostModel } from "../model/HotPostModel";
import { PostModel, PostType } from "../model/PostModel";
import { ScrollPostModel } from "../model/ScrollPostModel";


interface State {
  posts: PostModel[];
  hot_posts: HotPostModel[];
  scroll_posts: ScrollPostModel[];
  page: number;
  type: number
}

export const usePostStore = defineStore("postStore", {
  state: () => {
    return { posts: [],
      hot_posts: [],
      scroll_posts: [],
      page:1,
      type: 0
     } as State;
  },
  actions: {
    async get_posts_() {
      console.log(this.type)
      this.posts = await getPosts((this.page - 1) * 5, this.type, undefined);
      console.log(this.posts)
    },
    async get_hot_posts_() {
      console.log(this.type)
      this.hot_posts = await getHotPosts();
      console.log(this.posts)
    },
    async get_scroll_posts_() {
      console.log(this.type)
      this.scroll_posts = await getScrollPosts();
      console.log(this.posts)
    },
  },
});

import { defineStore } from "pinia";
import { getBlogs } from "../api/blog_api";
import { BlogModel } from "../model/BlogModel";



interface State {
  blogs: BlogModel[];
  page: number;
}

export const useBlogStore = defineStore("blogStore", {
  state: () => {
    return { blogs: [],
      page:1
     } as State;
  },
  actions: {
    async get_blogs_() {
      this.blogs = await getBlogs((this.page-1)*5, undefined, undefined);
    },
  },
});

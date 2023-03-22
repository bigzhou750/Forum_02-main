<template>
  <div style="margin-left: 10px;width: calc(100% - 300px)">
    <BlogInput v-if="globalStore.account" @addNewBlog="add_new_blog"></BlogInput>

    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton :rows="10" />

      </template>

      <template #default>
        <el-pagination layout="prev, pager, next" :pager-count="5" :total="20" :current-page="blogStore.page" style="margin-top: 10px;"
          @current-change="page_change" />
        <BlogItem v-for="blog in blogStore.blogs" :blog="blog"> </BlogItem>
        <el-pagination layout="prev, pager, next" :pager-count="5" :total="20" :current-page="blogStore.page"
      @current-change="page_change" />
      </template>
    </el-skeleton>


  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BlogItem from "../../components/Blog/BlogItem.vue";
import BlogInput from "../../components/Blog/BlogInput.vue";

import { PostModel } from "../../model/PostModel";
import { useBlogStore } from "../../stores/blogStore";
import { getBlogs } from "../../api/blog_api";
import { BlogModel } from "../../model/BlogModel";
import { useGlobalStore } from "../../stores/globalStore";
const globalStore = useGlobalStore();
const blogStore = useBlogStore()
const loading = ref(true)
// const currentPage = ref()
function add_new_blog(data: BlogModel) {
  blogStore.blogs.unshift(data)
}

function page_change(page) {
  loading.value = true
  blogStore.page = page

  blogStore.get_blogs_()
  loading.value = false

}
onMounted(async () => {
  loading.value = true
  blogStore.get_blogs_()
  loading.value = false

})

</script >

<style>

</style>
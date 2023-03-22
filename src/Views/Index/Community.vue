<template>
  <div style="margin-left: 10px;width: calc(100% - 250px);">
    <el-row :gutter="40">
      <el-col :span="16">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item of postStore.scroll_posts" :key="item">
            <img :src="item.image_link" style="width:100%;border-radius: 20px;" justify="center" fit="fill">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8">
        <el-table :data="postStore.hot_posts" style="width: 100%" :row-class-name="tableRowClassName" :show-header="false"
          height="400px">
          <el-table-column prop="index" label="Index" width="50" />
          <el-table-column prop="title" label="Title" />
        </el-table>
      </el-col>
    </el-row>
    <PostInput @addNewPost="add_new_post"></PostInput>

    <el-tabs v-model="currentTab" class="demo-tabs" type="card" @tab-change="onTabChange"
      style="background-color: #F2F6FC; color:black;">
      <el-tab-pane label="Latested" name="Latested">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton :rows="10" />
          </template>
          <template #default>
            <el-pagination layout="prev, pager, next" :pager-count="4" :total="20" :current-page="postStore.page"
      @current-change="page_change" />
            <PostItem v-for="item of postStore.posts" :post="item"></PostItem>
          </template> 
        </el-skeleton>
      </el-tab-pane>
      <el-tab-pane :label=PostType[1] name="Study abroad">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton :rows="10" />
          </template>
          <template #default>
            <el-pagination layout="prev, pager, next" :pager-count="4" :total="20" :current-page="postStore.page"
      @current-change="page_change" />
            <PostItem v-for="item of postStore.posts" :post="item"></PostItem>
          </template> 
        </el-skeleton>
      </el-tab-pane>
      <el-tab-pane :label=PostType[2] name="Help">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton :rows="10" />
          </template>
          <template #default>
            <el-pagination layout="prev, pager, next" :pager-count="4" :total="20" :current-page="postStore.page"
      @current-change="page_change" />
            <PostItem v-for="item of postStore.posts" :post="item"></PostItem>
          </template> 
        </el-skeleton>
      </el-tab-pane>
      <el-tab-pane :label=PostType[3] name="Culture">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton :rows="10" />
          </template>
          <template #default>
            <el-pagination layout="prev, pager, next" :pager-count="4" :total="20" :current-page="postStore.page"
      @current-change="page_change" />
            <PostItem v-for="item of postStore.posts" :post="item"></PostItem>
          </template> 
        </el-skeleton>
      </el-tab-pane>
      <el-tab-pane label="Travel" name="Travel">
        <el-skeleton :loading="loading" animated>
          <template #template>
            <el-skeleton :rows="10" />
          </template>
          <template #default>
            <el-pagination layout="prev, pager, next" :pager-count="4" :total="20" :current-page="postStore.page"
      @current-change="page_change" />
            <PostItem v-for="item of postStore.posts" :post="item"></PostItem>
          </template> 
        </el-skeleton>
      </el-tab-pane>
      <!-- </template> -->


    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import PostInput from "../../components/Post/PostInput.vue";
import PostItem from "../../components/Post/PostItem.vue";
import { HotPostModel } from "../../model/HotPostModel";
import { usePostStore } from "../../stores/potsStore";
import { getHotPosts, getPosts, getScrollPosts } from "../../api/post_api";
import { TabPaneName, TabsPaneContext } from "element-plus";
import { PostModel, PostType } from "../../model/PostModel";

const currentTab = ref<TabPaneName>("Latested")
const loading = ref(true)
const postStore = usePostStore()
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: HotPostModel
  rowIndex: number
}) => {
  if (row.index === 1) {
    return 'first-row'
  } else if (row.index === 2) {
    return 'second-row'
  } else if (row.index === 3) {
    return 'third-row'
  }
  return ''
}



function add_new_post(data: PostModel) {
  console.log("Emit adding post")
  postStore.posts.unshift(data)
}

// async function get_post(offset: number) {
//   console.log("type", PostType[activeName.value])
//   await getPosts(offset, PostType[activeName.value], undefined)
// }
const onTabChange =  async (name: TabPaneName) => {
  loading.value = true
  postStore.type = PostType[name]
  currentTab.value = name
  console.log(postStore.type)
  console.log(currentTab.value)
  await postStore.get_posts_()
  loading.value = false
}
async function page_change(page) {
  loading.value = true
  postStore.page = page
  await postStore.get_posts_()
  loading.value = false
}
onMounted(async () => {
  loading.value = true
  currentTab.value = PostType[postStore.type]
  await postStore.get_hot_posts_()
  await postStore.get_scroll_posts_()
  await postStore.get_posts_()
  loading.value = false
  // console.log(scrollData.value)
})

</script >
  
<style>
.el-table .first-row {
  --el-table-tr-bg-color: #f17896;
}

.el-table .second-row {
  --el-table-tr-bg-color: #da86ba;
}

.el-table .third-row {
  --el-table-tr-bg-color: #dba4d2;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.demo-tabs>.el-tabs__content {
  /* padding: 32px; */
  /* color: #6b778c; */
  font-size: 32px;
  font-weight: 600;
}
</style>
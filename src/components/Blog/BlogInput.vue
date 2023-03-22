<template>
    <el-progress v-if="loading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
    <div class="input_card">
<!--        <div class="input_card_top">-->
<!--            <el-avatar :size="50" v-if="account?.portraitImage" :src="portraitImageUrl(account?.portraitImage)" class="avatar" />-->
<!--            <el-avatar :size="50" v-else-if="account?.name" class="avatar">{{ account?.name.slice(0, 6) }}</el-avatar>-->
<!--            <textarea cols="50" rows="10" class="textarea" v-model="text" placeholder="Share something..."></textarea>-->
<!--        </div>-->
<!--        <div>-->
<!--            <ImagePicker ref="childRef"></ImagePicker>-->
<!--        </div>-->
      <editor ref="childRef"></editor>
        <div class="input_card_bottom">
            <div class="icon">
                <!-- <el-button :icon="Picture" circle />
                <el-button :icon="Sunny" circle /> -->
            </div>
            <el-button @click="create_blog" color="#7700e7" style="margin: 10px;font-weight: bold;" round>Publish</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { Picture, Sunny } from "@element-plus/icons-vue";
// import ImagePicker from "./ImagePicker.vue";
import { computed, nextTick, onMounted } from "vue";
import { constant, method } from "lodash";
import { PostModel } from "../../model/PostModel";
import { useGlobalStore } from "../../stores/globalStore";
import type { Models } from 'appwrite/types';
import { account } from "../../api";
import { useBlogStore } from "../../stores/blogStore";
import { da } from "element-plus/es/locale";
import { BlogModel } from "../../model/BlogModel";
import { createBlog } from "../../api/blog_api";
import { ElMessage } from "element-plus";
import { getUser } from "../../api/user_api";
import { portraitImageUrl } from "../../constants/config";
import Editor from "./editor.vue";

// let text = ref("");
const globalStore = useGlobalStore();
const childRef: any = ref(null);
const account_ = computed(() => globalStore.account_);
const account = computed(() => globalStore.account);
const blogStore = useBlogStore()
const emit = defineEmits(["addNewBlog"]);
const loading = ref(false)

async function create_blog() {
    loading.value = true
    if (account.value) {
        // let imageUrls: string[] = await childRef.value.upload();
      let text: string = await  childRef.value.valueHtml;
      childRef.value.valueHtml.value = '';
        // console.log("url", JSON.stringify(imageUrls))

        console.log("acc", account.value.uid)
        let data: BlogModel = {
            uid: account.value.uid,
            title: "",
            content: text,
            // imageLinks: imageUrls,
            shareCount: 0,
            likes: [],
            comments: [],
            viewCount: 0
        }
        // console.log("data", data);
        const res = await createBlog(data);
        if (res) {
            const res = await getUser(data.uid)
            if (res) {
                data.user = res
            }
            emit("addNewBlog", data);
            ElMessage.success("Publish Successfully")
            blogStore.blogs.unshift(data)
        } else {
            ElMessage({
                showClose: true,
                message: 'Publish Failed',
                type: 'error',
            })
        }

    } else {
        ElMessage({
            showClose: true,
            message: 'Please Login',
            type: 'error',
        })
    }
    loading.value = false
}


</script >
  
<style scoped lang="scss">
.input_card {
    margin-block: 10px;
    min-height: 200px;
    background-color: #fff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .input_card_top {
        display: flex;

        .textarea {
            margin-top: 10px;
            resize: none;
            font-size: 20px;
            width: 80%;
            border: none;
            color: #999;
            outline: none;
            font-family: ''
        }

    }

    textarea::-webkit-input-placeholder {
        color: #999;
        font-size: 20px;
        font-weight: bold;
    }

    .input_card_bottom {
        padding-left: 120px;
        display: flex;
        justify-content: space-between;

        .icon {
            font-size: 24px;

            .el-icon:nth-child(2) {
                margin-left: 20px;
            }
        }
    }
}
</style>
<template>
      <el-progress v-if="loading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
    <div class="input_card" >
        <el-row style="height: 200px;">
            <el-col span="5">
                <el-avatar :size="50" v-if="account?.portraitImage" :src="portraitImageUrl(account?.portraitImage)" class="avatar" />
                <el-avatar :size="50" v-else-if="account?.name" class="avatar">{{ account?.name.slice(0, 6) }}</el-avatar>
            </el-col>
            <el-col span="5" class="input_card_top">
                <textarea cols="50" rows="10" class="textarea" v-model="text" placeholder="Publish a post..."></textarea>
            </el-col>
            <el-col span="5">

            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-radio-group v-model="type" size="large">
                <el-radio-button label="Study abroad" />
                <el-radio-button label="Help" />
                <el-radio-button label="Culture" />
                <el-radio-button label="Travel" />
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
            <el-col>
                <ImagePicker ref="childRef"></ImagePicker>
            </el-col>

        </el-row>
        <el-row>

            <el-col>
                <div class="input_card_bottom">
                    <div >
                        <Emoj @insertEmoj="insertContentHandle"></Emoj>
                    </div>
                    <el-button @click="create_post"  color="#7700e7" style="font-weight: bold;" round>Publish</el-button>
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { Picture, Sunny } from "@element-plus/icons-vue";
import ImagePicker from "../Blog/ImagePicker.vue";
import { computed, nextTick, onMounted } from "vue";
import { constant, method } from "lodash";
import { PostModel, PostType } from "../../model/PostModel";
import { useGlobalStore } from "../../stores/globalStore";
import { portraitImageUrl } from "../../constants/config";

import { usePostStore } from "../../stores/potsStore";
import { createPost } from "../../api/post_api";
import { ElMessage, ElNotification } from "element-plus";
import { getUser } from "../../api/user_api";
import Emoj from "../Utiles/Emoj.vue";



const loading = ref(false)
let text = ref("");
const type = ref('')
const globalStore = useGlobalStore();
const childRef: any = ref(null);
const account_ = computed(() => globalStore.account_);
const account = computed(() => globalStore.account);
const showsidebar = computed(() => globalStore.showSidebar);
const postStore = usePostStore()
function onchange(){
    console.log(PostType["Study abroad"])
}
const emit = defineEmits(["addNewPost"]);
function insertContentHandle(emoj) {
    text.value = text.value + emoj;
}

async function create_post() {
    loading.value = true
    if (account_.value) {
        if(type.value == ""){
            ElMessage.error('Please choose post type!')
        }else{
            let imageUrls: string[] = await childRef.value.upload();
        let data: PostModel = {
            uid: account_.value.$id,
            content: text.value,
            imageLinks: imageUrls,
            shareCount: 0,
            likes: [],
            comments: [],
            viewCount: 0,
            anonymity: false,
            type: PostType[type.value]
        }
        // console.log("data", data);
        const res = await createPost(data);
        console.log("res", res);
        if (res) {
            const res = await getUser(data.uid)
            if(res){
                data.user = res
            }
            emit("addNewPost", data);
            ElMessage.success("Publish successfully!")
            // postStore.posts.unshift(data)
        } else {
            console.log("Create failed");
        }
        }
    }
    loading.value = false

}


</script >
  
<style scoped lang="scss">
.input_card {
    min-height: 50px;
    background-color: #fff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 100px;
    margin-block: 10px;
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
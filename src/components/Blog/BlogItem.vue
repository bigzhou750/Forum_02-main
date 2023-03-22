<template>
    <div class="blog_card">
        <el-row class="blog_title_row">
            <span>
                <el-button text circle @click="show_info">
                    <el-avatar :size="50" v-if="blog.user?.portraitImage" :src="portraitImageUrl(blog.user?.portraitImage)" class="avatar" />
                <el-avatar :size="50" v-else-if="blog.user?.name" class="avatar">{{ blog.user?.name.slice(0, 6) }}</el-avatar>
                </el-button>
            </span>
            <span class="blog_info">
                <el-button link @click="show_info">
                    <div class="blog_title">{{ blog.user?.name }}</div>
                </el-button>

                <div class="blog_duration">{{ get_time() }}</div>
            </span>
        </el-row>
        <div class="blog_content_row">
            <div class="text_content" v-html = "blog.content"></div>
        </div>
<!--        <div style="margin:20px;text-align:center;">-->
<!--            <el-image v-if="blog.imageLinks.length==1" :src="imageUrl(blog.imageLinks[0])" style="width:40%;border-radius: 5px;" />-->
<!--            <el-carousel v-else-if="blog.imageLinks.length" style="background-color: white;">-->
<!--                <el-carousel-item v-for="item in blog.imageLinks" style="background-color: white;">-->
<!--                    <img :src="imageUrl(item)" style="width:50%;border-radius: 5px;">-->
<!--                </el-carousel-item>-->
<!--            </el-carousel>-->
<!--        </div>-->
        <el-row class="blog_interact_row">
            <el-col :span="24">
                <span class="blog_section">
                    <el-button link @click="like_blog">
                        <el-icon v-if="blog.liked" :size="28">
                            <svg t="1678552956510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3661" width="200" height="200"><path d="M780.8 204.8c-83.2-44.8-179.2-19.2-243.2 44.8L512 275.2 486.4 249.6c-64-64-166.4-83.2-243.2-44.8C108.8 275.2 89.6 441.6 185.6 537.6l32 32 153.6 153.6 102.4 102.4c25.6 25.6 57.6 25.6 83.2 0l102.4-102.4 153.6-153.6 32-32C934.4 441.6 915.2 275.2 780.8 204.8z" fill="#f50655" p-id="3662"></path></svg>
                        </el-icon>
                        <el-icon v-else :size="28">
                            <svg t="1678553334552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3864" width="200" height="200"><path d="M797.184 518.496l-284.384 294.016-284.16-292A162.752 162.752 0 0 1 192 417.6C192 328.512 263.808 256 352 256a159.36 159.36 0 0 1 133.28 72.16L512 368.64l26.72-40.48A159.488 159.488 0 0 1 672 256c88.224 0 160 72.512 160 161.6 0 37.536-12.992 74.08-34.816 100.896M672 192a222.72 222.72 0 0 0-160 67.712A222.624 222.624 0 0 0 352 192c-123.52 0-224 101.216-224 225.6 0 52.288 18.176 103.232 52.96 145.536l285.952 293.984a62.4 62.4 0 0 0 45.088 19.168c17.12 0 33.12-6.816 45.12-19.136l287.744-296.064A226.816 226.816 0 0 0 896 417.6C896 293.216 795.52 192 672 192" fill="#8a8a8a" p-id="3865"></path></svg>
                        </el-icon>
                    </el-button>
                    <span style="font-size:20px; display: inline-block;vertical-align: middle;">{{ blog.likes.length }}</span>
                </span>
                <span class="blog_section">
                    <el-button link @click="">
                        <el-icon :size="23">
                            <svg t="1678553912899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5570" width="200" height="200"><path d="M512 85.333333A426.666667 426.666667 0 0 0 85.333333 512a421.973333 421.973333 0 0 0 96.426667 270.08l-85.333333 85.333333a42.666667 42.666667 0 0 0-8.96 46.506667A42.666667 42.666667 0 0 0 128 938.666667h384a426.666667 426.666667 0 0 0 0-853.333334z m0 768H230.826667l39.68-39.68a42.666667 42.666667 0 0 0 0-60.16A341.333333 341.333333 0 1 1 512 853.333333z" p-id="5571" fill="#8a8a8a"></path></svg>
                        
                        </el-icon>
                    </el-button>
                    <span style="font-size:20px; display: inline-block;vertical-align: middle;">{{ blog.comments.length }}</span>
                </span>
                <span class="blog_section">
                    <el-button link @click="">
                        <el-icon :size="22">
                            <svg t="1678553984092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6826" width="200" height="200"><path d="M768.013965 703.999739a159.749941 159.749941 0 0 0-127.849953 63.799976L306.254136 576.999786a160.35994 160.35994 0 0 0 0-129.999952l333.909876-190.799929a159.529941 159.529941 0 1 0-27.539989-57.999979L268.80415 394.689854a159.999941 159.999941 0 1 0 0 234.619912l343.819873 196.459928A159.999941 159.999941 0 1 0 768.013965 703.999739z m0-639.999763a95.999964 95.999964 0 1 1-95.999964 95.999965 96.109964 96.109964 0 0 1 95.999964-95.999965zM277.364147 403.24985z m-2.769999-2.909999z m-2.849999-2.859999zM160.014191 607.999774a95.999964 95.999964 0 1 1 95.999964-95.999964 96.109964 96.109964 0 0 1-95.999964 95.999964z m111.699958 18.539993z m5.649998-5.789997z m-2.769999 2.919999zM768.013965 959.999644a95.999964 95.999964 0 1 1 95.999964-95.999965 96.109964 96.109964 0 0 1-95.999964 95.999965z" fill="#8a8a8a" p-id="6827"></path></svg>
                        </el-icon>
                    </el-button>
                    <span style="font-size:20px; display: inline-block;vertical-align: middle;">{{ blog.comments.length }}</span>
                </span>
            </el-col>

        </el-row>
        <div class="blog_conment_area">
            <el-row class="blog_conment_row">
                <el-col :span="22">
                    <el-input class="blog_input_comment" v-model="text" placeholder="Input comment..." />
                </el-col>
                <el-col :span="2">
                    <el-button round @click="create_comment">Comment</el-button>
                </el-col>
            </el-row>
            <CommentItem v-for="comment in commentData" :comment="comment"></CommentItem>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ChatSquare, Star, Share, StarFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { computed, onMounted, ref } from "vue";
import { likeBlog } from "../../api/blog_api";
import { createComment, getComments, getDuration, showInfo } from "../../api/user_api";
import { COLLECTIONS, imageUrl, portraitImageUrl } from "../../constants/config";
import { BlogModel } from "../../model/BlogModel";
import { CommentModel } from "../../model/CommentModel";
import { useGlobalStore } from "../../stores/globalStore";

const globalStore = useGlobalStore();
const account_ = computed(() => globalStore.account_);
let text = ref("");
const commentData = ref<CommentModel[]>([])
let commentOffset = 0


interface Props {
    blog: BlogModel
}
const props = defineProps<Props>()
async function like_blog() {
    props.blog.liked = !props.blog.liked
    const res = await likeBlog(props.blog)
    if(!res){
        ElMessage.error("Please login")
        props.blog.liked = !props.blog.liked
        console.log("like blog:", res)
    }
    
}

function get_time() {
    let date = props.blog.createdAt
    if (date) {
        const res = getDuration(date)
        return res
    }else{
        return "• now"
    }
}
async function get_comments() {
    if (props.blog.comments.length != 0) {
        const res = await getComments(commentOffset, props.blog.comments)
        if (res) {
            commentData.value = commentData.value.concat(res)
            commentOffset += 5
        }
    }

}
function show_info() {
    if (props.blog.user) {
        showInfo(props.blog.user)
    }

}
async function create_comment() {
    if (account_.value) {
        let data: CommentModel = {
            uid: account_.value.$id,
            content: text.value,
            imageLinks: [],
            likes: [],
            comments: [],
            anonymity: false,
        }
        // console.log("data", data);
        const res = await createComment(data, COLLECTIONS.feed_blog, props.blog.id!, props.blog.comments);
        console.log("res", res);
        if (res) {
            commentData.value.unshift(data)
        } else {
            console.log("Create failed");
        }
    }
}
onMounted(async () => {
    get_comments()
    // console.log(scrollData.value)
})

</script >

<style scoped lang="scss">
.blog_card {
    background-color: white;
    border-radius: 2%;
    margin-block: 20px;
    padding-block: 40px;
    padding-inline: 20px;

    .blog_title_row {
        // height: auto;

        .blog_avatar {
            size: 60;
            vertical-align: middle;
        }

        .blog_title {
            text-align: left;
            font-size: large;
            color: black;
        }

        .blog_duration {
            text-align: left;
            font-size: small;
            color: gray;
            font-weight: 500;
        }
    }

    .blog_content_row {
        .text_content {
            // font-family: 'Times New Roman';
            padding-block: 20px;
            padding-inline: 7%;
            font-size: large;
            color: black;
            text-align: left;
            font-weight: 500;
            word-wrap: break-word;
            text-align: justify;
        }
    }

    .blog_interact_row {
        text-align: right;
        padding-right: 30px;

        .blog_section {

            padding-inline: 10px;
        }
    }

    .blog_conment_area {
        background-color: white;
        padding: 50px;

        .blog_conment_area {
            padding: 10px;

            .blog_input_comment {
                padding-right: 20px;
            }
        }
    }

}</style>
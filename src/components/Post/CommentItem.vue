<template>
    <div class="comment_card">
        <el-row class="comment_tile">
            <span>
                <el-button text circle @click="show_info">
                    <el-avatar :size="50" v-if="comment.user?.portraitImage" :src="portraitImageUrl(comment.user?.portraitImage)" class="avatar" />
                <el-avatar :size="50" v-else-if="comment.user?.name" class="avatar">{{ comment.user?.name.slice(0, 6) }}</el-avatar>
                </el-button>
            </span>
            <span class="comment_info">
                <el-button link @click="show_info">
                    <div class="comment_title">{{ comment.user?.name }}</div>
                </el-button>

                <div class="comment_duration">{{ get_time() }}</div>

            </span>
        </el-row>
        <el-row>
            <div class="comment_content">{{ comment.content }}</div>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { compact } from 'lodash';
import { getDuration, showInfo } from '../../api/user_api';
import { portraitImageUrl } from '../../constants/config';
import { CommentModel } from '../../model/CommentModel';

interface Props {
    comment: CommentModel
}
const props = defineProps<Props>()

function show_info() {
    if (props.comment.user) {
        showInfo(props.comment.user)
    }

}

function get_time() {
    let date = props.comment.createdAt
    if (date) {
        const res = getDuration(date)
        return res
    }
}
</script>

<style lang="scss">
.comment_card {
    margin-block: 20px;
    .comment_tile {
        .comment_avatar {
            width: 50px;
            height: 50px;
        }

        .comment_info {
            text-align: left;
            vertical-align: top;

            .comment_title {
                font-size: large;
                color: black;
                font-weight: bold;
            }

            .comment_duration {
                font-size: small;
                color: gray;
                font-weight: 500;
            }

        }


    }

    .comment_content {
        padding-left: 70px;
        font-size: medium;
        color: black;
        font-weight: 400;
    }
}
</style>
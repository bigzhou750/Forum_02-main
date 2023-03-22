<template>
  <el-progress v-if="uploading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
  <div class="profile">
    <div>
      <el-image class="image" v-if="globalStore.HeaderUser?.profileImage"
        :src="imageUrl(globalStore.HeaderUser?.profileImage)" fit="fill">
      </el-image>

      <el-image v-else fit="fill" class="image"
        src="https://ec2-18-134-161-159.eu-west-2.compute.amazonaws.com/v1/storage/buckets/test/files/640f3d045310a71756dc/preview?quality=50&project=640b314367202176ff6d&mode=admin">
      </el-image>

      <div v-if="globalStore.HeaderUser?.uid==globalStore.account_?.$id" class="change_profile"> 
        <el-upload ref="uploadRef" :auto-upload="false" :on-change="handleProfile" :show-file-list="false">
          <template #trigger>
            <el-button round text bg style="font-weight: bold;">Change Profile</el-button>
          </template>
        </el-upload> 
      </div>
    </div>
    <div class="info">
      <div class="avatar">
        <el-avatar :size="120" v-if="globalStore.HeaderUser?.portraitImage"
          :src="portraitImageUrl(globalStore.HeaderUser?.portraitImage)" />
        <el-avatar :size="120" v-else>{{ globalStore.HeaderUser?.name }}</el-avatar>
      </div>
      <div v-if="globalStore.HeaderUser?.uid==globalStore.account_?.$id" class="change_portrait">
        <el-upload ref="uploadRef" :auto-upload="false" :on-change="handlePreview" :show-file-list="false">
          <template #trigger>
            <el-button link>
              <el-icon :size="30">
                <svg t="1678643053153" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="3209" width="200" height="200">
                  <path d="M512 544m-96 0a1.5 1.5 0 1 0 192 0 1.5 1.5 0 1 0-192 0Z" fill="#2c2c2c" p-id="3210"></path>
                  <path
                    d="M774.4 288 384 288C384 268.8 371.2 256 352 256l-64 0C268.8 256 256 268.8 256 288L249.6 288c-51.2 0-89.6 38.4-89.6 89.6l0 332.8c0 51.2 38.4 89.6 89.6 89.6l524.8 0c51.2 0 89.6-38.4 89.6-89.6L864 377.6C864 326.4 825.6 288 774.4 288zM512 704c-89.6 0-160-70.4-160-160S422.4 384 512 384s160 70.4 160 160S601.6 704 512 704zM736 448C716.8 448 704 435.2 704 416 704 396.8 716.8 384 736 384 755.2 384 768 396.8 768 416 768 435.2 755.2 448 736 448z"
                    fill="#2c2c2c" p-id="3211"></path>
                </svg>
              </el-icon>
            </el-button>
          </template>
        </el-upload>
      </div>
      <div class="name">
        {{ globalStore.HeaderUser?.name }}
        <span v-if="globalStore.HeaderUser?.uid==globalStore.account_?.$id">
          <el-button link @click="dialogName = true">
            <el-icon :size="25">
              <svg t="1678643385215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4663" width="200" height="200">
                <path
                  d="M280.571429 877.714286l52-52-134.285714-134.285714-52 52 0 61.142857 73.142857 0 0 73.142857 61.142857 0zm298.857143-530.285714q0-12.571429-12.571429-12.571429-5.714286 0-9.714286 4l-309.714286 309.714286q-4 4-4 9.714286 0 12.571429 12.571429 12.571429 5.714286 0 9.714286-4l309.714286-309.714286q4-4 4-9.714286zm-30.857143-109.714286l237.714286 237.714286-475.428571 475.428571-237.714286 0 0-237.714286zm390.285714 54.857143q0 30.285714-21.142857 51.428571l-94.857143 94.857143-237.714286-237.714286 94.857143-94.285714q20.571429-21.714286 51.428571-21.714286 30.285714 0 52 21.714286l134.285714 133.714286q21.142857 22.285714 21.142857 52z"
                  p-id="4664" fill="#2c2c2c"></path>
              </svg>
            </el-icon>
          </el-button>
        </span>
      </div>
      <div class="joinIn">
        {{ `Join in ${globalStore.HeaderUser?.createdAt?.slice(0, 10)}` }}
      </div>
    </div>
    <el-dialog v-model="dialogName" title="Input your name" width="30%">
      <el-input v-model="newName" autocomplete="off" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogName = false" round >Cancel</el-button>
          <el-button color="#7700e7" round @click="updateName">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-tabs v-model="activeName" class="demo-tabs" type="card" @tab-change="onTabChange"
      style="background-color: #F2F6FC;">
      <el-tab-pane label="Post" name="Post">

        <PostItem v-for="item of postData" :post="item"></PostItem>
      </el-tab-pane>
      <el-tab-pane label="Blog" name="Blog">
        <div>
          <PostItem v-for="item of blogData" :post="item"></PostItem>
        </div>
      </el-tab-pane>


    </el-tabs>
  </div>
</template>
  
<script setup lang="ts">
import { ElMessage, ElNotification as notify, TabPaneName, UploadInstance, UploadProps } from 'element-plus'
import { onMounted, ref } from 'vue';
import { updateAccount } from '../../api/auth';
import { getBlogs } from '../../api/blog_api';
import { getPosts } from '../../api/post_api';
import { uploadImages } from '../../api/user_api';
import { imageUrl, portraitImageUrl } from '../../constants/config';
import { BlogModel } from '../../model/BlogModel';
import { FunctionResponseModel } from '../../model/FunctionResponseModel';
import { PostModel } from '../../model/PostModel';
import { useGlobalStore, HeaderNavType } from '../../stores/globalStore';
const uploading = ref(false)
const globalStore = useGlobalStore();
const onBack = () => {
  notify('Back')
}

const offset = 0
const postData = ref()
const blogData = ref()
const activeName = ref('Post')
const dialogName = ref(false)
const newName = ref("")
const uploadRef = ref<UploadInstance>()

const onTabChange = async (name: TabPaneName) => {

  // postData.value = await getPosts(offset, PostType[activeName.value])
}
const handleProfile: UploadProps['onPreview'] = async (uploadFile) => {
  uploading.value = true
  console.log(uploadFile.raw?.type)
  if (uploadFile.raw?.type !== 'image/jpeg' && uploadFile.raw?.type !== 'image/png') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (uploadFile.raw.size / 1024 / 1024 > 4) {
    ElMessage.error('Avatar picture size can not exceed 4MB!')
    return false
  }
  const image_list = await uploadImages([uploadFile])
  if (image_list?.length == 1) {
    const res: FunctionResponseModel = await updateAccount({ "uid": globalStore.account_!.$id, "profileImage": image_list![0] })
    console.log(res)
    if (res.code == 1) {
      globalStore.HeaderUser!.profileImage = image_list[0]
      globalStore.account!.profileImage = image_list[0]
    } else {
      ElMessage.error(res.message)
    }
    console.log(image_list)
  }
  uploadRef.value?.clearFiles()
  uploading.value = false
}

const handlePreview: UploadProps['onPreview'] = async (uploadFile) => {
  uploading.value = true
  if (uploadFile.raw?.type !== 'image/jpeg' && uploadFile.raw?.type !== 'image/png') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (uploadFile.raw.size / 1024 / 1024 > 4) {
    ElMessage.error('Avatar picture size can not exceed 4MB!')
    return false
  }
  const image_list = await uploadImages([uploadFile])
  if (image_list?.length == 1) {
    const res: FunctionResponseModel = await updateAccount({ "uid": globalStore.account_!.$id, "portraitImage": image_list![0] })
    console.log(res)
    if (res.code == 1) {
      globalStore.HeaderUser!.portraitImage = image_list[0]
      globalStore.account!.portraitImage = image_list[0]
    } else {
      ElMessage.error(res.message)
    }
    console.log(image_list)
  }
  uploadRef.value?.clearFiles()
  uploading.value = false
}

async function updateName(){
  dialogName.value = false
  uploading.value = true
  const res: FunctionResponseModel = await updateAccount({ "uid": globalStore.account_!.$id, "name": newName.value})
    console.log(res)
    if (res.code == 1) {
      globalStore.HeaderUser!.name = newName.value
      globalStore.account!.name = newName.value
    } else {
      ElMessage.error(res.message)
    }
    console.log(res)
    uploading.value = false
}

onMounted(async () => {
  postData.value = await getPosts(undefined, undefined, globalStore.HeaderUser?.uid)
  blogData.value = await getBlogs(undefined, undefined, globalStore.HeaderUser?.uid)
  globalStore.showSidebar = false
})
</script>

<style lang="scss" scoped>
.profile {
  // margin-left: 10px;
  // width: 40%;//calc(100% - 400px);
  background-color: white;

  .image {
    position: relative;
    height: 400px;
    background-color: rgb(241, 241, 241);
    z-index: 1;
  }

  .change_profile {
    font-size: 20px;
    z-index: 2;
    display: block;
    position: relative;
    top: -50px;
  }

  .info {
    padding: 20px;

    .avatar {
      size: 60;
      color: pink;
    }

    .change_portrait {
      background-color: rgb(255, 255, 255);

      font-size: 20px;
      z-index: 1;
      // display: block;
      position: relative;
      top: -30px;
    }

    .name {
      padding-block: 10px;
      font-weight: 600;
      font-size: xx-large;
    }

    .joinIn {
      font-weight: 400;
      font-size: medium;
      color: gray;
    }
  }

}
</style>
  
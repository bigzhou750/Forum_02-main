<template>
  <div>
    <el-progress v-if="uploading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
    <h1 class="title">Upload a portrait image</h1>
    <img src="../../assets/avatar.png" height="100" style="margin-bottom: 30px;"/>
    <el-upload class="avatar-uploader" v-model:file-list="fileList" :auto-upload="false" :show-file-list="false"
      :on-change="onChange">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <img src="../../assets/upload.png" style="height: 50px;">
      </el-icon>
    </el-upload>
    <div>
      <el-button @click="upload_portrait" color="#7700e7" style="margin-top: 30px;font-weight: bold;">
        Upload<el-icon class="el-icon--right">
          <Upload />
        </el-icon>
      </el-button>
    </div>
    <el-link @click="upload_portrait" style="margin-top: 30px;font-weight: bold;font-size: large;color:black;">Skip right now</el-link>
  </div>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElMessage, UploadUserFile } from 'element-plus'
import { Plus, Upload } from '@element-plus/icons-vue'
import { uploadImages } from '../../api/user_api';
import type { UploadProps } from 'element-plus'
import { checkAccount, getAccount, updateAccount } from '../../api/auth';
import { FunctionResponseModel } from '../../model/FunctionResponseModel';
import { SidebarView, useGlobalStore } from '../../stores/globalStore';

const globalStore = useGlobalStore()
const imageUrl = ref('')
const uploading = ref(false)
const fileList = ref<UploadUserFile[]>([
])


async function checkFile(data: UploadUserFile[]): Promise<boolean> {
  if (data.length != 1) {
    if (await getAccount()) {
      globalStore.setSidebarView(SidebarView.MyHomeView);
      
      ElMessage.success("Create account successfully!")
      // await checkAccount()
    } else {
      ElMessage.error("Get account failed!")
    }
    return false
  }
  else if (data[0].raw!.type !== 'image/jpeg' && data[0].raw!.type !== 'image/png' ) {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (data[0].raw!.size / 1024 / 1024 > 5) {
    ElMessage.error('Avatar picture size can not exceed 5MB!')
    return false
  }
  return true
}
const onChange = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  // console.log("imageurl", uploadFile)
}
async function upload_portrait() {
  uploading.value = true
  if (await checkFile(fileList.value)) {
    const image_list = await uploadImages(fileList.value)
    if (image_list?.length == 1) {
      const res: FunctionResponseModel = await updateAccount({ "uid": globalStore.account_!.$id, "portraitImage": image_list![0] })
      console.log(res)
      if (res.code == 1) {
        if (await getAccount()) {
          globalStore.setSidebarView(SidebarView.MyHomeView);
          ElMessage.success("Create account successfully!")
          // await checkAccount()
        } else {
          ElMessage.error("Get account failed!")
        }
      } else {
        ElMessage.error(res.message)
      }
    }
    console.log("file", image_list)
  }
  uploading.value = false
  fileList.value = []
}

</script>
  
<style scoped>
.title {
  font-size: x-large;
  margin-top: 40px;
  margin-bottom: 70px;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;

}
</style>
  
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
  
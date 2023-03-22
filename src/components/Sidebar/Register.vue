<template>
  <el-progress v-if="loading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
  <section class="section">
    <div>
      <h1 class="title">Join us</h1>
      <img src="../../assets/1.jpg" height="400" />
    </div>
    <div class="input">
      <el-input v-model="username" placeholder="Name" show-word-limit maxlength="12" class="input1"/>
      <el-input v-model="email" placeholder="Email"  class="input1"/>
      <el-input v-model="password" type="password" placeholder="Password, at least 8 characters" show-password  class="input1"/>
      <el-button @click="register_" type="primary" color="#7700e7" class="button" round>Register</el-button>
      <p class="text">Already have a account?<span><el-button class="text1" link @click="show_login"> sign
            in now</el-button></span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { checkAccount, getAccount, register } from "../../api/auth";
import { FunctionResponseModel } from "../../model/FunctionResponseModel";
import { SidebarView, useGlobalStore } from "../../stores/globalStore";


const loading = ref(false)
const email = ref("");
const password = ref();
const username = ref();
const globalStore = useGlobalStore();
async function register_() {
  loading.value = true
  if (!email.value || !password.value){
    ElMessage.error("Please check input.")
  };
  // const res: FunctionResponseModel = await register("username", email.value, password.value)
  if (await register(username.value, email.value, password.value)) {
    globalStore.setSidebarView(SidebarView.UploadPortraitView);
    // await checkAccount()
    // await getAccount
  } else {
    ElMessage.error("Please check input.")
  }
  loading.value = false

}
function show_login() {
  globalStore.setSidebarView(SidebarView.LoginView);
}
</script>


<style lang="scss">
.section {
  .title {
    font-size: xx-large;
    margin-top: 40px;
    margin-bottom: 0px;
  }
  .input{
    padding: 30px;
    .input1{
      margin-bottom: 20px;
    }
    .button{
      font-weight: bold;
      // color: #7700e7;
    }
    .text{
      font-size: large;
      .text1{
        color: #7700e7;
        font-size: large;
      }
      
    }
  }
}
</style>
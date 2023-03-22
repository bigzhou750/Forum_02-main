<template>
  <el-progress v-if="loading" :percentage="30" :duration="1" :indeterminate="true" :show-text="false" color="#7700e7" :stroke-width="3"></el-progress>
  <section class="section1">
    <div>
      <h1 class="title">Login</h1>
      <img src="../../assets/2.jpg" height="300" />
    </div>
    <div class="input">
      <el-input v-model="email" placeholder="Email"  class="input1"/>
      <el-input v-model="password" type="password" placeholder="Password" show-password  class="input1"/>
      <el-button @click="login_" type="primary" color="#7700e7" class="button" round>Login</el-button>
      <p class="text">Not have a account?<span><el-button class="text1" link @click="show_register"> register
        right now</el-button></span>
      </p>
    </div>
    <el-button link @click="login_google" class="social">
        <span class="or">Login with</span>
        <!-- <el-button class="button" circle @click="login_google" > -->
        <img src="../../assets/google-logo.png" class="icon"/>

    </el-button>
  </section>


  

</template>
  
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { login, socialLogin } from "../../api/auth";
import { SidebarView, useGlobalStore } from "../../stores/globalStore";
const loading = ref(false)
const email = ref('')
const password = ref('')
const globalStore = useGlobalStore();
async function login_() {
  loading.value = true
  if (await login(email.value, password.value)) {
    globalStore.setSidebarView(SidebarView.MyHomeView);
  }else{
    ElMessage.error("Please check account and password.")
  }
  loading.value = false
}
async function login_google() {
  console.log("login button clicked\n");
  socialLogin("google")
    // globalStore.setSidebarView(SidebarView.MyHomeView);

}
function show_register() {
  globalStore.setSidebarView(SidebarView.RegisterView);
}

</script>
  
<style lang="scss">
.section1 {
  .title {
    font-size: xx-large;
    margin-top: 40px;
    margin-bottom:70px;
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
  .social{
    border-radius: 20px;
    background-color: #e7e7e7;
    width: 150px;
    padding: 5px;
    text-align:center;
    margin: auto;
  // margin-inline: 100px;

    .or{
      font-size: large;
      font-weight: 600;
      padding-right: 10px;
      display: inline-block;
      vertical-align: middle;
    }
    .icon{
      width: 25px;
      height: 25px;
    }
  }
}
</style>

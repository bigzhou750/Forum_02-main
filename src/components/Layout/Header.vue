<template>
  <el-row :gutter="0" style="width: calc(100% - 20px);height:100px;padding:10px 20px;">
    <el-col :span="5" style="text-align: left;">
      <!-- <div style="display: flex; vertical-align: middle;">
        <img src="../../assets/forum.png" alt="" width="60" style="width: 20%;">
        <div style="font-size: 25px; font-weight: bold; vertical-align: middle;width: 80%;margin-top: 25px;">China CEEC
        </div>
      </div> -->

      <img src="../../assets/forum.png" alt="" width="60" style="">
      <div style="font-size: 25px; font-weight: bold; vertical-align: middle;display: inline-block;margin-bottom: 45px;">
        China-CEEC
      </div>

    </el-col>

    <el-col :span="17">
      <NavBar class="el-menu-home"></NavBar>
    </el-col>
    <!-- <el-col :span="3" style="text-align:left;vertical-align:middle;padding:15px 0;">
      <el-input v-model="value" class="w-50 m-2" placeholder="Type something" :prefix-icon="Search" />
    </el-col> -->
    <el-col :span="2">
      <div style="margin-top: 13px;">
        <el-button link @click="show_info">
          <el-avatar :size="40" v-if="account?.portraitImage" :src="portraitImageUrl(account?.portraitImage)"
            class="avatar" />
          <el-avatar :size="40" v-else-if="account?.name" class="avatar">{{ account?.name.slice(0, 6) }}</el-avatar>
          <!-- <el-button icon="el-icon-caret-bottom" circle style="border:0;color:#000;" size="large"></el-button> -->
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import NavBar from "./NavBar.vue";
import { ref } from "@vue/reactivity";
import { Search, CaretBottom, Edit } from "@element-plus/icons-vue";
import { useGlobalStore } from '../../stores/globalStore';
import { computed, nextTick, onMounted } from "vue";
import { portraitImageUrl } from "../../constants/config";
import { showInfo } from "../../api/user_api";
import { UserModel } from "../../model/UserModel";
const globalStore = useGlobalStore();
let value = ref("");
const account = computed(() => globalStore.account);

function show_info() {
  const user:UserModel = {
  uid: account.value?.uid!,
  name: account.value?.name!,
  profileImage: account.value?.profileImage,
  portraitImage: account.value?.portraitImage,
  createdAt: account.value?.createdAt
}
    if (user) {
        showInfo(user)
    }
}
function show_side_bar() {
  console.log("click side bar\n");
  // globalStore.showSideBar(!globalStore.showSidebar);
}
</script >

<style scoped lang="scss">
.search {
  width: 180px;
  border-radius: 20px;
  font-weight: bold;
}

.el-menu-home {
  // width: 70%;
  font-size: 18px;
  margin: 0 5%;
  border: 0;
  display:flexbox;
  justify-content: center;
}
</style>
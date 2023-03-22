<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <div>
              <Login v-if="sidebarView == SidebarView.LoginView"></Login>
              <Register v-if="sidebarView == SidebarView.RegisterView"></Register>
              <UploadPortrait v-if="sidebarView == SidebarView.UploadPortraitView"></UploadPortrait>
              <Menu v-if="sidebarView == SidebarView.MyHomeView"></Menu>
            </div>
        </el-menu>
    </div>
</template>
  
<script lang="ts" setup>
import Login from '../Sidebar/Login.vue';
import Register from '../Sidebar/Register.vue';
import Menu from '../Sidebar/Menu.vue';
import UploadPortrait from '../Sidebar/UploadPortrait.vue';
import { SidebarView, useGlobalStore } from '../../stores/globalStore';
import { computed, onMounted, ref } from 'vue';
import { getAccount } from '../../api/auth';
const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const globalStore = useGlobalStore();
const showsidebar = computed(() => globalStore.showSidebar);
const sidebarView = computed(() => globalStore.sidebarView);

onMounted(async ()=>{
    if(await getAccount()){
    globalStore.setSidebarView(SidebarView.MyHomeView);

  }else{
    globalStore.setSidebarView(SidebarView.LoginView);
  }
})
const isCollapse = ref(true)
</script>
  
<style>

/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 400px;
  min-height: 400px;
} */

</style>
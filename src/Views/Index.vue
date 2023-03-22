<template>
  <el-container class="container">
    <!-- <el-affix> -->
      <el-header style="height: 80px; background-color: white;">
        <Header></Header>
      </el-header>
    <!-- </el-affix> -->

    <el-container>
      <!-- <el-affix offset="80" > -->
        <el-aside v-if="globalStore.showSidebar" style="width: 15%; min-width: 400px; background-color: white;">
          <Sidebar></Sidebar>
        </el-aside>
      <!-- </el-affix> -->

      <el-main style="background-color: #f7f7f7;padding: 1px;">
        <HeaderNav v-if="globalStore.showHeader" ></HeaderNav>
        <router-view v-else></router-view>
      </el-main>
      <!-- <el-footer>
        <Footer></Footer>
      </el-footer> -->
    </el-container>

  </el-container>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import Footer from "../components/Layout/Footer.vue";
import Header from "../components/Layout/Header.vue";
import HeaderNav from "../components/Header/HeaderNav.vue";
import Sidebar from "../components/Layout/Sidebar.vue";
import { useGlobalStore } from "../stores/globalStore";

const globalStore = useGlobalStore();
const showHeader = ref(true)

</script >

<style scoped lang="scss">
.index,
.container {
  // color: #f7f7f7;
  height: 100%;
  width: 100%;
}
</style>
<template>
  <el-menu :default-active="activeIndex" class="nav_bar" mode="horizontal" active-text-color="#7700e7"  @select="handleSelect">
    <el-menu-item index="/home">Home</el-menu-item>
    <el-menu-item index="/blog">Blog</el-menu-item>
    <el-menu-item index="/community">Community</el-menu-item>
    <el-menu-item index="/events">Events</el-menu-item>
    <el-menu-item index="/study">Study</el-menu-item>
    <!-- <el-menu-item index="/about">About</el-menu-item> -->
  </el-menu>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const activeIndex = ref();
// console.log("router",router.currentRoute.value.fullPath)
activeIndex.value = router.currentRoute.value.fullPath
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key);
  // console.log(keyPath);
  router.push({ path: key });
};
</script>
<style scoped lang="scss">
.nav_bar{
  font-weight: bold;
  text-align: center;
}
::v-deep .el-menu-item:not(.is-disabled):hover {
  background-color: #fff;
  font-weight: bold;
  color: #000;
}
</style>
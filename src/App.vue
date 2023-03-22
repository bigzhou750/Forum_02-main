<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  var str = navigator.userAgent
  console.log(str)
  var ipad = str.match(/(iPad).*OS\s([\d_]+)/)
    var isIphone = !ipad && str.match(/(iPhone\sOS)\s([\d_]+)/)
    var isAndroid = str.match(/(Android)\s+([\d.]+)/)
    if (isIphone) {
      router.replace('/:err(.*)*"')
    } else if (isAndroid) {
      router.replace('/:err(.*)*"')
    }
});
</script >

<style>
#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  text-align: center;
  /* 网页铺满没白边 */
  margin:0;
  height: 100%;
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
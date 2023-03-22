<template>
    <el-page-header @back="onBack" class="header_nav">
        <template #content>
            <div class="header_title">
                <span v-if="globalStore.type == HeaderNavType.Info"> {{ globalStore.HeaderUser?.name }} </span>
                <span v-else> Details </span>
            </div>
        </template>

        <InfoNav v-if="globalStore.type == HeaderNavType.Info" ref="uploadingRef"></InfoNav>
        <PostNav v-else-if="globalStore.type == HeaderNavType.Post"></PostNav>
        <BlogNav v-else-if="globalStore.type == HeaderNavType.Blog"></BlogNav>>
    </el-page-header>
</template>
  
<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import { useGlobalStore, HeaderNavType } from '../../stores/globalStore';
import InfoNav from './InfoNav.vue';
import PostNav from './PostNav.vue';
import BlogNav from './BlogNav.vue';
import { onMounted, ref } from 'vue';
const globalStore = useGlobalStore();
const onBack = () => {
    
    // notify('Back')
    globalStore.showHeader = false
    globalStore.showSidebar = true

}
onMounted(async () => {
    globalStore.showSidebar = false
})
</script>
  
<style lang="scss" scoped>
.header_nav {
    padding-block: 20px;
    width: 900px;
    justify-content: center;
    display:inline-block;
    background-color: white;
    padding-inline: 20px;
    .header_title {
        font-weight: 600;
        font-size: large;
        
    }
}
</style>
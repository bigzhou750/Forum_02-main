<template>
  <div class="editor">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { imageUrl } from "../../constants/config";
import { storage } from "../../api";
export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref();

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      // setTimeout(() => {
      //   valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
      // }, 1500)
    });

    const toolbarConfig = {};
    const editorConfig = {
      MENU_CONF: {
        uploadImage: {
          server: '',
          async customUpload(file, insertFn) {                   // JS 语法
            // file 即选中的文件
            // 自己实现上传，并得到图片 url alt href
            let response = await storage.createFile("test","unique()",file, []);
            const url = imageUrl(response.$id.toString());
            console.log(url);
            const alt = response.name;
            // 最后插入图片
            insertFn(url, alt)
          }
        },
      },
    };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    return {
      editorRef,
      valueHtml,
      mode: "default",
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
};
</script>

<style scoped>
.editor {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
<template>
    <el-popover placement="right-start" :width="360" trigger="click" style="text-align: center">
        <template #reference>
        <el-button link>
            <el-icon :size="35">
                <svg t="1678726720136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26911" width="200" height="200"><path d="M512 85.290667C747.648 85.290667 938.666667 276.352 938.666667 512.042667c0 235.648-191.061333 426.709333-426.709334 426.709333-235.690667 0-426.752-191.061333-426.752-426.709333C85.248 276.352 276.309333 85.248 512 85.248zM360.96 630.784a32 32 0 0 0-50.261333 39.594667A255.616 255.616 0 0 0 512 768.085333c79.36 0 152.746667-36.394667 201.045333-97.450666a32 32 0 0 0-50.261333-39.68A191.616 191.616 0 0 1 512 704.085333c-59.690667 0-114.773333-27.306667-150.997333-73.301333zM384 373.333333a53.333333 53.333333 0 1 0 0 106.624A53.333333 53.333333 0 0 0 384 373.333333z m256 0a53.333333 53.333333 0 1 0 0 106.624 53.333333 53.333333 0 0 0 0-106.624z" fill="#efb336" p-id="26912"></path></svg>
            </el-icon>
        </el-button>
      </template>
        <el-button type="text" @click="insertContentHandle(item1.char)" v-for="item1 in data" 
            style="border:none;font-size:25px;margin:5px;padding:0"> {{ item1.char }}
        </el-button>
    </el-popover>
</template>
<script lang="ts" setup>import { ref } from 'vue';

const visible = ref(true)
const data = [
    {
        "codes": "1F600",
        "char": "😀",
        "name": "grinning face"
    },
    {
        "codes": "1F603",
        "char": "😃",
        "name": "grinning face with big eyes"
    },
    {
        "codes": "1F604",
        "char": "😄",
        "name": "grinning face with smiling eyes"
    },
    {
        "codes": "1F601",
        "char": "😁",
        "name": "beaming face with smiling eyes"
    },
    {
        "codes": "1F606",
        "char": "😆",
        "name": "grinning squinting face"
    },
    {
        "codes": "1F605",
        "char": "😅",
        "name": "grinning face with sweat"
    },
    {
        "codes": "1F923",
        "char": "🤣",
        "name": "rolling on the floor laughing"
    },
    {
        "codes": "1F602",
        "char": "😂",
        "name": "face with tears of joy"
    },
    {
        "codes": "1F642",
        "char": "🙂",
        "name": "slightly smiling face"
    },
    {
        "codes": "1F643",
        "char": "🙃",
        "name": "upside-down face"
    },
    {
        "codes": "1F609",
        "char": "😉",
        "name": "winking face"
    },
    {
        "codes": "1F60A",
        "char": "😊",
        "name": "smiling face with smiling eyes"
    },
    {
        "codes": "1F607",
        "char": "😇",
        "name": "smiling face with halo"
    },
    {
        "codes": "1F970",
        "char": "🥰",
        "name": "smiling face with hearts"
    },
    {
        "codes": "1F60D",
        "char": "😍",
        "name": "smiling face with heart-eyes"
    },
    {
        "codes": "1F929",
        "char": "🤩",
        "name": "star-struck"
    },
    {
        "codes": "1F618",
        "char": "😘",
        "name": "face blowing a kiss"
    },
    {
        "codes": "1F617",
        "char": "😗",
        "name": "kissing face"
    },
    {
        "codes": "1F61A",
        "char": "😚",
        "name": "kissing face with closed eyes"
    },
    {
        "codes": "1F619",
        "char": "😙",
        "name": "kissing face with smiling eyes"
    },
    {
        "codes": "1F44B",
        "char": "👋",
        "name": "waving hand"
    },
    {
        "codes": "1F91A",
        "char": "🤚",
        "name": "raised back of hand"
    },
    {
        "codes": "1F590",
        "char": "🖐",
        "name": "hand with fingers splayed"
    },
    {
        "codes": "270B",
        "char": "✋",
        "name": "raised hand"
    },
    {
        "codes": "1F596",
        "char": "🖖",
        "name": "vulcan salute"
    },
    {
        "codes": "1F44C",
        "char": "👌",
        "name": "OK hand"
    },
    {
        "codes": "1F90F",
        "char": "🤏",
        "name": "pinching hand"
    },
    {
        "codes": "270C",
        "char": "✌",
        "name": "victory hand"
    },
    {
        "codes": "1F91E",
        "char": "🤞",
        "name": "crossed fingers"
    },
    {
        "codes": "1F91F",
        "char": "🤟",
        "name": "love-you gesture"
    },
    {
        "codes": "1F918",
        "char": "🤘",
        "name": "sign of the horns"
    },
    {
        "codes": "1F919",
        "char": "🤙",
        "name": "call me hand"
    },
    {
        "codes": "1F448",
        "char": "👈",
        "name": "backhand index pointing left"
    },
    {
        "codes": "1F449",
        "char": "👉",
        "name": "backhand index pointing right"
    },
    {
        "codes": "1F446",
        "char": "👆",
        "name": "backhand index pointing up"
    },
    {
        "codes": "1F595",
        "char": "🖕",
        "name": "middle finger"
    },
    {
        "codes": "1F447",
        "char": "👇",
        "name": "backhand index pointing down"
    },
    {
        "codes": "261D FE0F",
        "char": "☝️",
        "name": "index pointing up"
    },
    {
        "codes": "1F44D",
        "char": "👍",
        "name": "thumbs up"
    },
    {
        "codes": "1F44E",
        "char": "👎",
        "name": "thumbs down"
    },
    {
        "codes": "270A",
        "char": "✊",
        "name": "raised fist"
    },
    {
        "codes": "1F44A",
        "char": "👊",
        "name": "oncoming fist"
    },
    {
        "codes": "1F91B",
        "char": "🤛",
        "name": "left-facing fist"
    },
    {
        "codes": "1F91C",
        "char": "🤜",
        "name": "right-facing fist"
    }

]

function insertContentHandle(data) {
    emit("insertEmoj", data);
}
const emit = defineEmits(["insertEmoj"]);
</script>

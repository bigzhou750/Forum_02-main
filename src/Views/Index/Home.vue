<template>
    <div>
        <div class="home_row1">
            <div class="video-background">
                <!-- <video class="video-background" preload="auto" loop playsinline autoplay src="../../assets/file.mp4" tabindex="-1" :muted="true"> -->
                    <div class="home_text_area">
                    <div class="home_title">
                        <div>China-CEEC</div>
                        <div>Students</div>
                        <div>Forum</div>
                    </div>
                    <div class="home_content">
                        We are a non-profit international student organization dedicated to promoting economic and trade
                        cooperation and cultural exchanges between China and Central and Eastern Europe.
                    </div>

                </div>
                <!-- </video> -->




            </div>

        </div>
        <div class="home_row2">
            <el-row gutter="5" justify="space-evenly" class="home_el-row">
                <el-col class="home_col" span="6">
                    <img src="../../assets/conference.png" class="home_img">
                    <div class="home_title">
                        Youth Conference
                    </div>
                    <div class="home_content">
                        Regular online youth conferences, inviting students and young scholars from both sides to discuss hot topics around the world.
                    </div>
                    <div style="padding-top: 40px;">
                        <a class="home_button" href="/events">Read More ></a>
                    </div>
                </el-col>

                <el-col class="home_col" span="6">
                    <img src="../../assets/buddy.png" class="home_img">
                    <div class="home_title">
                        STUDY BUDDY
                    </div>
                    <div class="home_content">
                        It matches the needs of both students, and finds the perfect study partner who can support and promote each other. During the event, a variety of workshops will be open to all students.
                    </div>
                    <div style="padding-top: 40px;">
                        <a class="home_button" href="/events">Read More ></a>
                    </div>
                </el-col>

                <el-col class="home_col" span="6">
                    <img src="../../assets/post.png" class="home_img">
                    <div class="home_title">
                        BLOG
                    </div>
                    <div class="home_content">
                        Here you can share your views by posting blogs, participate in real-time brainstorming, show your views and realize your own value output.
                    </div>
                    <div style="padding-top: 40px;">
                        <a class="home_button" href="/blog">Read More ></a>
                    </div>
                </el-col>

                <el-col class="home_col" span="6">
                    <img src="../../assets/community.png" class="home_img">
                    <div class="home_title">
                        COMMUNITY
                    </div>
                    <div class="home_content">
                        Here, questions will be answered and ideas will be sparked, and this will become the most active section of the website.
                    </div>
                    <div style="padding-top: 40px;">
                        <a class="home_button" href="/community">Read More ></a>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="home_row3">
            <div class="home_title">About Me.</div>
            <div class="home_content">
                China-Central and Eastern Europe Inter-Student Forum (China-CEEC Inter-Student Forum) is a non-profit international student organization (NPO), establishedby students of major universities in China and Poland, who are committed to promoting economic and trade cooperation, and cultural exchanges between China and Central and Eastern Europe. It aims to providea free and convenient platform for students and young scholars from China and Central and Eastern Europe, in which students can share public information and resources to break information asymmetry, and young people from both China and Central and Eastern Europe can know each other better. In this way, this platform serves as a pool of talent for the economic and trade cooperation, and cultural exchanges between China and Central and Eastern Europe.
            </div>
        </div>
        <div class="home_row4">
            <div class="home_title">What Can We Bring To You?</div>
            <el-row class="home_row" gutter="200">
                <el-col span="6" class="home_col1">
                    <div class="home_title">
                        A broader perspective.
                    </div>
                    <div class="home_content">
                        The latest information on the culture, economy and politics of China and the countries of the CEE
                        region
                    </div>
                </el-col>
                <el-col span="18" class="home_col2">
                    <div class="home_content">Through “face-to-face” communication and information sharing with young people from other countries and regions, you will break down prejudices and barriers, see a broader, more realistic and exciting world, and solve problems in your study and work in a more effective and direct way.</div>

                </el-col>
            </el-row>
            <el-row class="home_row" gutter="200">
                <el-col span="6" class="home_col1">
                    <div class="home_title">
                        Unlimited brainstorming.
                    </div>
                    <div class="home_content">
                        We have a public community section and also hold various international dating events
                    </div>
                </el-col>
                <el-col span="18" class="home_col2">
                    <div class="home_content">By participating in the regularly updated topic discussion and the Youth Topic online meeting, you can always be exposed to a broader view and learn new things each time.</div>

                </el-col>
            </el-row>
            <el-row class="home_row" gutter="200">
                <el-col span="6" class="home_col1">
                    <div class="home_title">
                        Like-minded friends.
                    </div>
                    <div class="home_content">
                        Every user is passionate. 
                    </div>
                </el-col>
                <el-col span="18" class="home_col2">
                    <div class="home_content">They are young students with a keen interest in China-Central and Eastern Europe, and carry the desire to promote exchanges between the two sides. Reaching across regions and countries, cultural and conceptual differences, visible and invisible barriers, like-minded confidants are waiting for you here.</div>

                </el-col>
            </el-row>
            <el-row class="home_row" gutter="200">
                <el-col span="6" class="home_col1">
                    <div class="home_title">
                        A multi-faceted help for study and life.
                    </div>
                    <div class="home_content">
                        We have users from all over China and Central and Eastern Europe.
                    </div>
                </el-col>
                <el-col span="18" class="home_col2">
                    <div class="home_content">From undergraduates and postgraduates, to university faculties and young scholars. Whether it’s a study or a career choice, everyone is generous in sharing their experiences and knowledge.</div>

                </el-col>
            </el-row>
        </div>
        <div class="home_row5">
            <div class="home_card">
                <div class="home_title">Contact</div>
                <el-row class="home_row" gutter="200">
                    <el-col span="6" class="home_col1">
                        <div class="home_item">
                            <img src="../../assets/phone-fill.png" class="home_img">
                            <div class="home_content">400-100-1111</div>
                        </div>
                        <div class="home_item">
                            <img src="../../assets/email-fill.png" class="home_img">
                            <div class="home_content">Chinaceec2023@163.com</div>
                        </div>
                    </el-col>
                    <el-col span="18" class="home_col2">
                        <el-form
                            label-position="top"
                            label-width="100px"
                            :model="formLabelAlign"
                            class="home_item"
                            ref="ruleFormRef"
                        >
                            <el-form-item label="Name">
                            <el-input v-model="formLabelAlign.name" />
                            </el-form-item>
                            <el-form-item label="Email">
                            <el-input v-model="formLabelAlign.email" />
                            </el-form-item>
                            <el-form-item label="Message">
                            <el-input v-model="formLabelAlign.message" />
                            </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    ArrowRight,
} from '@element-plus/icons-vue'
import { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';

const ruleFormRef = ref<FormInstance>()
const formLabelAlign = reactive({
  name: '',
  email: '',
  message: '',
})
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.home_row1 {
    // max-height: 400px;
    .video-background {
        padding-block: 120px;
        background: url("../../assets/people.png") no-repeat;
        background-size: cover;
        max-height: 500px;
        // filter: blur(3px);
    // left: 50%;
    // top: 50%;
    /*保证视频内容始终居中*/
    // transform: translate(-50%, -50%);
    // width: 100%;
    // height: 100%;
    /*保证视频充满屏幕*/
    // object-fit: cover;
    // max-height: 600px;
    // position: absolute;
    // left: 60%;
    // top: 50%;

        .home_text_area {
            padding-right: 20%;
            padding-left: 60%;
            // padding-top: 100px;
            text-align: right;

            .home_title {
                font-size: 70px;
                font-weight: bold;
                text-align: right;
                font-family: "Times New Roman";
                color: rgb(9, 0, 133);
            }

            .home_content {

                font-size: medium;
                font-weight: bold;
                text-align: right;
                // font-family: "Times New Roman";
                color: rgb(9, 0, 133);
            }

        }

    }



}

.home_row2 {
    padding-block: 150px;
    background-color: rgb(9, 0, 133);

    .home_el-row {

        .home_col {
            width: 220px;

            .home_img {
                width: 170px;
            }

            .home_title {
                color: white;
                font-weight: bold;
                font-size: 30px;
            }

            .home_content {
                padding-top: 10px;
                color: white;
                font-weight: 400;
                font-size: 15px;
            }

            .home_button {
                // padding-top: 40px;
                color: white;
            }
        }
    }

}

.home_row3 {
    background-color: white;
    padding-left: 80px;
    padding-block: 150px;

    .home_title {
        text-align: left;
        color: black;
        font-weight: bold;
        font-size: 60px;
        font-family: "Times New Roman";
    }

    .home_content {
        padding-top: 40px;
        color: black;
        font-weight: 400;
        font-size: 25px;
        text-align: left;
        width: 60%;
    }
}

.home_row4 {
    background-color: rgb(241, 241, 241);
    padding-left: 80px;
    padding-block: 150px;

    .home_title {
        text-align: left;
        color: black;
        font-weight: bold;
        font-size: 60px;
        font-family: "Times New Roman";
    }

    .home_row {
        padding-top: 60px;
        flex-wrap: nowrap;
        .home_col1 {
            width: 20%;

            .home_title {
                text-align: left;
                color: black;
                font-weight: bold;
                font-size: 30px;

            }

            .home_content {
                color: black;
                font-weight: 300;
                font-size: 20px;
                word-wrap: break-word;
                text-align: justify;

            }
        }

        .home_col2 {
            width: 45%;

            .home_content {
                color: black;
                font-weight: 300;
                font-size: 22px;
                word-wrap: break-word;
                text-align: justify;

            }
        }

    }

}

.home_row5 {
    height: 700px;
    background-color: white;
    padding-left: 80px;
    padding-top: 150px;

    .home_card {
        .home_title {
            text-align: left;
            color: black;
            font-weight: bold;
            font-size: 80px;
            font-family: "Times New Roman";
        }

        .home_row {
            padding-top: 50px;
            .home_col1 {
                width: 200px;
                text-align: center;
                .home_item {
                    padding-bottom: 40px;
                    text-align: center;
                    .home_img {
                        width: 50px;
                        text-align: center;
                    }
                    .home_content{
                        text-align: center;
                        color: black;
                        font-weight: 600;
                        font-size: 18px;
                    }
                }

            }
            .home_col2{
                .home_item{
                    width: 400px;
                }
            }
        }
    }
}
</style>
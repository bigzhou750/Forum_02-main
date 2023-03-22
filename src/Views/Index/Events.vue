<template>
    <div class="events">
        <div class="row1">
            <div class="card">
                <div class="title">Conference of Youth</div>
                <div class="text">
                    We will open regular online youth conferences, inviting students from both sides to discuss global hot
                    topics and occasional academic lectures by experts in the field. The best young speakers will be
                    selected by
                    the mentors and the audience for each edition.
                </div>
                <el-button round color="#7700e7">Learn more</el-button>
            </div>
        </div>
        <div class="row2">
            <div class="card">
                <div class="title">My perfect study buddy</div>
                <div class="text">
                    The perfect match for language learners, matching the needs of both students and finding the perfect
                    study
                    partner who can support and facilitate each other.
                </div>
                <el-button round color="#7700e7">Learn more</el-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.events {
    // max-width: 70%;
    margin-top: 0;
    .row1 {
    background-image: url(../../assets/11062b_7c1c96aa5d84413f9622d7e1ad8cf38a_mv2.jpg);
    height: 540px;
    // position: absolute;
    .card {
        background-color: white;
        height: 250px;
        width: 500px;
        border-radius: 20px;
        margin-left: 10%;
        // margin-top: 10px;
        position: relative;
        top: 100px;
        // margin-left: 50px;
        .title {
            font-size: xx-large;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            padding-top: 10px;

        }

        .text {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            padding: 20px
        }
    }
}

.row2 {
    background-image: url(../../assets/11062b_f430b3d4b7bc48629bed1da5f56ad510_mv2.jpg);
    height: 540px;
    position: relative;

    .card {
        background-color: white;
        height: 250px;
        width: 500px;
        border-radius: 20px;
        margin-left: 10%;
        position: absolute;
        top: 100px;


        .title {
            font-size: xx-large;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            padding-top: 10px;

        }

        .text {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            padding: 20px
        }
    }
}
}


</style>
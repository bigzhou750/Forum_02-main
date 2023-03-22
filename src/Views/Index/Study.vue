<template>
    <div class="page">
        <div class="title">Quiz</div>
        <div class="desp">
            A fun Quiz area with interesting questions about the culture, economy and politics of China and the CEE countries.
        </div>
        <el-row :gutter="20" class="row">
            <el-col span="6">
                <div class="card"></div>
            </el-col>
            <el-col span="6">
                <div class="card"></div>
            </el-col>
            <el-col span="6">
                <div class="card"></div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss">
.page{
    height: 1000px;
    background-color: white;
    position: relative;
    .title{
        font-size: xx-large;
        position: absolute;
        left: 50px;
        top: 50px;
    }
    .desp{
        font-size: medium;
        color: gray;
        position: absolute;
        left: 50px;
        top: 100px;
    }
    .row{
        position: absolute;
        left: 50px;
        top: 200px;
        
        .card{
            height: 400px;
            width: 400px;
            background-color: aqua;
    }
    }

}
</style>
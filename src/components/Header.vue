<template>
  <el-row>
    <el-col :span="12">
        <h1>菜鸟驿站</h1>
    </el-col>
    <el-col :span="2">
        <el-button>ALL</el-button>
    </el-col>
    <el-col :span="2">
        <el-button>已预约</el-button>
    </el-col>
    <el-col :span="2">
        <el-button>已取件</el-button>
    </el-col>
    <el-col :span="2">
        <el-button>未取件</el-button>
    </el-col>
    <el-col :span="4">
        <el-button type="primary" icon="el-icon-edit" circle @click="toAdd"></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toAdd() {
            this.$router.push("/addPost");
        }
    }
}
</script>

<style scoped>
h1{
    margin: 0;
}
</style>


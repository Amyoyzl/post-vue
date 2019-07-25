<template>
  <el-row>
    <el-col :span="12">
        <h1>菜鸟驿站</h1>
    </el-col>
    <el-col :span="2">
        <el-button @click="getAll">ALL</el-button>
    </el-col>
    <el-col :span="2">
        <el-button @click="filters('已预约')">已预约</el-button>
    </el-col>
    <el-col :span="2">
        <el-button @click="filters('已取件')">已取件</el-button>
    </el-col>
    <el-col :span="2">
        <el-button @click="filters('未取件')">未取件</el-button>
    </el-col>
    <el-col :span="4">
        <el-button type="primary" icon="el-icon-edit" circle @click="toAdd"></el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: 'Header',
    methods: {
        toAdd() {
            this.$router.push("/addPost");
        },
        getAll() {
            this.$store.dispatch("loadPosts");
        },
        filters(state) {
            this.$store.dispatch('loadPostsByState', state);
        }
    }
}
</script>

<style scoped>
h1{
    margin: 0;
}
</style>


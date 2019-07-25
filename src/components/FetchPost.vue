<template>
  <div>
    <h2>预约取件</h2>
    <el-form ref="form" :model="post" label-width="100px">
      <el-form-item label="运单号：">
        <el-input v-model="post.id"></el-input>
      </el-form-item>
      <el-form-item label="取件时间：">
        <el-date-picker v-model="post.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="order">预约</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'fetchPost',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      order() {
        this.$store.dispatch("setPostTime", this.post);
      }
    }
}
</script>

<style scoped>
#package-btn{
  float: right;
  margin: 20px;
}
</style>

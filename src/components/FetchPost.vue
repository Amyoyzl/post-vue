<template>
  <div>
    <h2>预约取件</h2>
    <el-form ref="form" :model="post" label-width="100px">
      <el-form-item label="运单号：">
        <el-input v-model="post.id"></el-input>
      </el-form-item>
      <el-form-item label="取件时间：">
        <el-date-picker
          :picker-options="{
            disabledDate (date) {
              return date.getTime() < Date.now()
            },
            selectableRange: '09:00:00 - 20:00:00'
          }"
          v-model="post.time"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="order">预约</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "fetchPost",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    order() {
      let sure = confirm("确认预约？");
      if (sure) {
        this.$store.dispatch("setPostTime", this.post);
        alert("预约成功！");
      } else {
        this.post = {};
      }
    }
  }
};
</script>

<style scoped>
#package-btn {
  float: right;
  margin: 20px;
}
</style>

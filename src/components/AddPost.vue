<template>
  <div>
    <el-row>
      <h2>包裹入库</h2>
    </el-row>
    <el-form ref="form" :model="post" label-width="80px">
      <el-form-item label="运单号：">
        <el-input v-model="post.id"></el-input>
      </el-form-item>
      <el-form-item label="收件人：">
        <el-input v-model="post.name"></el-input>
      </el-form-item>
      <el-form-item label="电话：">
        <el-input v-model="post.phone"></el-input>
      </el-form-item>
      <el-form-item label="重量：">
        <el-input v-model="post.weight"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addPost",
  data() {
    return {
      post: {
        id: "",
        name: "",
        phone: "",
        weight: 0,
        state: "未取件"
      }
    };
  },
  methods: {
    add() {
      this.$store.dispatch("addPost", this.post);
      this.$router.push("/postList");
    },
    reset() {
      this.$router.push("/postList");
    }
  }
};
</script>
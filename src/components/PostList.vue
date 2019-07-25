<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="id" label="运单号" width="240"></el-table-column>
    <el-table-column prop="name" label="收件人" width="240"></el-table-column>
    <el-table-column prop="phone" label="电话" width="240"></el-table-column>
    <el-table-column prop="state" label="状态" width="240"></el-table-column>
    <el-table-column prop="time" label="预约时间" width="240"></el-table-column>
    <el-table-column>
      <template slot-scope="scope" v-if="scope.row.state!='已取件'">
        <el-button type="primary" @click="setState(scope.row.id)">确认收货</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "postList",
  computed: {
    ...mapGetters(["posts"])
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  methods: {
    setState(id) {
      this.$store.dispatch("setPostState", {id: id, state: '已取件'});
    }
  }
};
</script>

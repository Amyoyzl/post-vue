<template>
    <el-table
      :data="posts"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="运单号"
        width="240">
      </el-table-column>
      <el-table-column
        prop="name"
        label="收件人"
        width="240">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="240">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="240">
      </el-table-column>
      <el-table-column
        prop="time"
        label="预约时间"
        width="240">
      </el-table-column>
      <el-table-column>
      </el-table-column>
    </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    name: 'postList',
    computed: {
        ...mapGetters(["posts"])
    },
    mounted() {
        this.getPosts
    },
    methods: {
        ...mapActions({
            getPosts: "loadPosts"
        })
    }
}
</script>

<template>
  <div>
    <h2>预约取件</h2>
    <el-form ref="form" :model="post" label-width="80px">
      <el-form-item label="运单号：">
        <el-input v-model="post.id"></el-input>
      </el-form-item>
      <el-form-item label="取件时间：">
        <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'fetchPost'
}
</script>
<template>
  <div id="container">
    <el-container>
      <el-header>
        <v-head />
        <hr>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "post",
  components: {
    "v-head": Header,
  }
};
</script>

<style scoped>
#container{
  margin: 0 10vw;
}
</style>



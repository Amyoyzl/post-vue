<template>
    <div>
        <router-link to="/fetch" style="margin-right: 20px">预约取件</router-link>
        <router-link to="/posts">包裹管理</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>
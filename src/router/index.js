import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/components/Post'
import PostList from '@/components/PostList'
import AddPost from '@/components/AddPost'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Post,
    children: [{
            path: '/posts',
            component: PostList,
            alias: '/'
        },
        {
            path: '/addPost',
            component: AddPost
        }
    ]
}]

export default new VueRouter({
    mode: 'history',
    routes
})
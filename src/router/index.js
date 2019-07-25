import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/components/Post'
import PostList from '@/components/PostList'
import AddPost from '@/components/AddPost'
import Fetch from '@/components/FetchPost'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
                path: '/posts',
                component: Post,
                children: [{
                        path: '/postList',
                        component: PostList,
                        alias: '/'
                    },
                    {
                        path: '/addPost',
                        component: AddPost
                    }
                ]
            },
            {
                path: '/fetch',
                component: Fetch
            }
        ]
    },

]

export default new VueRouter({
    mode: 'history',
    routes
})
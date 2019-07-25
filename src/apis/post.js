import request from '@/util/request'

export const getPosts = () => {
    return request({
        url: '/packages',
        method: 'get'
    })
}

export const addPost = (post) => {
    return request({
        url: '/packages',
        method: 'post',
        data: post
    })
}

export const getPostsByState = (state) => {
    return request({
        url: '/packages',
        method: 'get',
        params: { "state": state }
    })
}

export const setPostTime = (id, time) => {
    return request({
        url: '/packages/{id}',
        method: 'patch',
        params: { "time": time }
    })
}

export const setPostState = (id, state) => {
    return request({
        url: '/packages/{id}',
        method: 'patch',
        params: { "state": state }
    })
}
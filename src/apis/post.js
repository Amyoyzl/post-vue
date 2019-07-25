import request from '@/util/request'

export const getPosts = () => {
    return request({
        url: '/packages',
        method: 'get'
    })
}
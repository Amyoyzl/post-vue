import types from './mutationType'
import { getPosts } from '@/apis/post'

export default {
    async loadPosts({ commit }) {
        const result = await getPosts();
        commit(types.LOAD_POSTS, result.data);
    }
}
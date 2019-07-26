import types from './mutationType'
import { getPosts, addPost, getPostsByState, setPostTime, setPostState } from '../apis/post'


export default {
    async loadPosts({ commit }) {
        const result = await getPosts();
        commit(types.LOAD_POSTS, result.data);
    },
    async addPost({ commit }, post) {
        await addPost(post);
        const result = await getPosts();
        commit(types.LOAD_POSTS, result.data);
    },
    async loadPostsByState({ commit }, states) {
        const result = await getPostsByState(states);
        commit(types.LOAD_POSTS, result.data);
    },
    async setPostTime({ commit }, post) {
        await setPostTime(post.id, post.time);
        const result = await getPosts();
        commit(types.LOAD_POSTS, result.data);
    },
    async setPostState({ commit }, post) {
        await setPostState(post.id, post.state);
        const result = await getPosts();
        commit(types.LOAD_POSTS, result.data);
    }
}
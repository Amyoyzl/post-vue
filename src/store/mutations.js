import types from './mutationType'
export default {
    [types.LOAD_POSTS]: (state, posts) => {
        state.posts = posts;
    },
    [types.ADD_POST]: (state, post) => {
        state.posts.push(post);
    }
}
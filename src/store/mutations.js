import types from './mutationType'
export default {
    [types.LOAD_POSTS]: (state, posts) => {
        state.posts = posts;
    }
}
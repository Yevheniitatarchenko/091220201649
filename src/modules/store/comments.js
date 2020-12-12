import CommentsService from '../services/comments.service';

const commentsService = new CommentsService();

const state = {
  comments: [],
};

/* eslint-disable no-shadow */
const mutations = {
  SET_COMMENTS(state, comment) {
    state.comments.push(comment);
  },
};

const getters = {};
const actions = {
  // eslint-disable-next-line no-empty-pattern
  add_comment: async ({
    commit,
  }, comments) => {
    try {
      const res = await commentsService.add_comment(comments);
      const comment = res.data;
      commit('SET_COMMENTS', comment);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};

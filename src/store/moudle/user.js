// moudle/user.js
export default {
  namespaced: true, // 命名空间 变量私有化 有命名空间的时间actions想走到模块里面需要加模块名
  state: {},
  actions: {
    minusCount({ commit, rootState }) {
      console.log(rootState.count);
    },
  },
  mutations: {},
  getters: {},
};

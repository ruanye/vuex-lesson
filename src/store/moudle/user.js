// moudle/user.js
export default {
  namespaced: true, // 命名空间 变量私有化 有命名空间的时间actions想走到模块里面需要加模块名
  state: {
    count: 1,
  },
  actions: {
    minusCount({
      state, rootState, commit, dispatch,
    }) {
      const n = state.count - rootState.count;
      const m = 3;
      // actions muations 如果有参数只能有一个 vuex多个参数传递用对象传递
      // commit('minusCount', { n, m });
      // 如果想调用全局的mutation
      // dispatch('someOtherAction', null, { root: true })
      commit('ACount', null, { root: true });
    },
  },
  mutations: {
    minusCount(state, { n, m }) {
      state.count = n + m;
    },
  },
  getters: {},
};

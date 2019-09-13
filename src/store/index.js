// store/index
import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import actions from './acitons';
import mutations from './mutations';
import user from './moudle/user';
// 打印vuex状态
// process.env.NODE_ENV -> development(开发环境(写代码))、production(生产环境(上线))e
Vue.use(Vuex);
const state = {
  count: 100,
};
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development', // 开启vuex严格模式 在mutation之外修改state会报警告(给开发人员看的)
  state,
  actions,
  mutations,
  getters: {},
  modules: {
    user,
  }, // 模块
  plugins: [logger()], // 插件
});

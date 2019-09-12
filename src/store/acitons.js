import * as Types from './mutation-types';

const actions = {
  // 点击加1
  increase({ commit }) {
    commit(Types.ADD_COUNT);
  },
  // 点击减一
  minusCount({ commit }) {
    commit(Types.MINUS_COUNT);
  },
};
export default actions;

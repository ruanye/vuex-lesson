// mutations
import * as Types from './mutation-types';

export default {
  // 点击加一
  [Types.ADD_COUNT](state) {
    state.count += 1;
  },
  [Types.MINUS_COUNT](state) {
    state.count -= 1;
  },
};

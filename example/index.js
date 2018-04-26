import Mhr from "menhera";
import Mhrx from "../src";

Mhr.$use({
  _mount: {
    Mhrx
  },
  Mhrx: {
    state: {
      count: 0
    },
    mutations: {
      increment(state, payload) {
        state.count += payload;
      }
    },
    actions: {
      increment({ commit, dispatch }, payload) {
        commit("increment", payload);
      }
    }
  }
}).$use({
  Mhrx: {
    observe: {
      count(val) {
        console.log(val);
      }
    },
    commit: {
      increment: 10
    },
    dispatch: {
      increment: 10
    }
  }
});

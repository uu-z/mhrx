import Mhr from "menhera";
import Mhrx from "../src";
import { resolve } from "path";

const store = Mhrx({ name: "Mhrx" });

Mhr.$use({
  _mount: {
    store
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
      async increment({ commit, dispatch }, payload) {
        await new Promise(res => {
          setTimeout(res, 2000);
        });
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

## Mhrx

a vuex experimental implementant for menhera

## Install

```bash
$ yarn add menhera mhrx
```

## example

```js
import Mhr from "menhera";
import Mhrx from "mhrx";

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
```

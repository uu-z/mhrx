## Mhrx

a vuex experimental implementant for menhera

## Install

```bash
$ yarn add menhera mhrx
```

## example

```bash
$ npx babel-node example/index.js
```

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
```

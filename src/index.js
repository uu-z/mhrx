import { observable, observe } from "@nx-js/observer-util";

export default ({ name }) => ({ _ }) => ({
  name,
  states: observable({}),
  mutations: {},
  actions: {},
  _hooks: {
    [name]: {
      methods: {
        $({ _key, _val }) {
          this[_key] = _val.bind(this);
        }
      },
      state: {
        $({ _key, _val }) {
          this.states[_key] = _val;
        }
      },
      mutations: {
        $({ _key, _val }) {
          this.mutations[_key] = _val;
        }
      },
      actions: {
        $({ _key, _val }) {
          this.actions[_key] = _val;
        }
      },
      observe: {
        $({ _key, _val }) {
          observe(() => _val(this.states[_key]));
        }
      },
      commit: {
        $({ _key, _val: payload }) {
          this.commit(_key, payload);
        }
      },
      dispatch: {
        $({ _key, _val: payload }) {
          this.dispatch(_key, payload);
        }
      }
    }
  },
  [name]: {
    methods: {
      commit(_key, payload) {
        let mutation = this.mutations[_key];
        if (mutation) mutation(this.states, payload);
      },
      dispatch(_key, payload) {
        let action = this.actions[_key];
        if (action) action(this, payload, _);
      }
    }
  }
});

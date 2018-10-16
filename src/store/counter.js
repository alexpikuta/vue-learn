export default {
  state: {
    counter: 0
  },
  mutations: {
    changeCounter (state, val) {
      state.counter += val
    }
  },
  actions: {
    asyncChangeCounter (context, val) {
      setTimeout(() => {
        context.commit('changeCounter', val)
      }, 10)
    }
  },
  getters: {
    computedCounter(state) {
      return state.counter * 3 * (7/3)
    }
  }
}
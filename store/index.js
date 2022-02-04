const store = Vuex.createStore({
  state: {
    user: null
  },
  getters: {
    currentUser(state) {
      return state.user
    }
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  }
})
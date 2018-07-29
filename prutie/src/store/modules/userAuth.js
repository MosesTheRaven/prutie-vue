const state = {
  authState : false
}

const getters = {
  isLoggedIn : (state) => {
    return state.authState
  }
}

const mutations = {
  setAuthState : (state, bool) => {
    state.authState = bool
  }
}

const actions = {
  logout : ({ commit }) => {
    commit('setAuthState', false)
  },
  login : ({ commit }) => {
    console.log('nejakym zazrakom som sa vykonal')
    commit('setAuthState', true)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
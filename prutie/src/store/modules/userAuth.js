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
    commit('setToken', false)
  },
  login : ({ commit }) => {
    console.log('nejakym zazrakom som sa vykonal')
    commit('setToken', true)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
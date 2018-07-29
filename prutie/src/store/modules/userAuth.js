
import * as firebase from 'firebase'

const state = {
  authState : false,
  attemptedTry : false,
  userData : {},

}

const getters = {
  isLoggedIn : (state) =>{
    return state.authState
  },
  getUserData : (state) =>{
    return state.userData
  },
  isAttemptedTry : (state) =>{
    return state.attemptedTry1
  }
}

const mutations = {
  setAuthState : (state, bool) => {
    state.authState = bool
    console.log(state.authState)
  },
  setUserData : (state, newUserData) => {
    state.userData = newUserData
  },
  setAttemptedTry : (state, bool) => {
    state.attemptedTry = bool
  }
}

const actions = {
  logout : ({ commit }) => {
    commit('setAuthState', false)
  },
  login : ({ commit }, loginData) => {
    if(loginData.name && loginData.password){
      var users = {}
      firebase.database().ref('users/')
      .once('value', (userDataSnapshot)=>{
        users = userDataSnapshot.val()
      })
      .then(()=>{
        if(users[loginData.name] == loginData.password) {
          commit('setUserData', loginData.name)
          commit('setAuthState', true)
          commit('setAttemptedTry', false)
        }
        else {
          console.log('chybne prihlasovacie udaje')
          commit('setAttemptedTry', true)
        }
      })
    }
    else {
      console.log('chybne prihlasovacie udaje')
      
      commit('setAttemptedTry', true)
    }
  }    
}


export default {
  state,
  getters,
  mutations,
  actions
}
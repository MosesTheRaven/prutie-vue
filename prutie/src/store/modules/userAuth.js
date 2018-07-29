
import * as firebase from 'firebase'

const state = {
  authState : false,
  userData : {},

}

const getters = {
  isLoggedIn : (state) =>{
    return state.authState
  },
  getUserData : (state) =>{
    return state.userData
  },
}

const mutations = {
  setAuthState : (state, bool) => {
    state.authState = bool
  },
  setUserData : (state, newUserData) => {
    state.userData = newUserData
  },
}

const actions = {
  updateUserData : ({ commit }, newUserData) => {
    commit('setUserData', newUserData)
  },
  logout : ({ commit }) => {
    commit('setAuthState', false)
  },
  login : ({ commit }, loginData) => {
    //prihlasenie do firebase
    firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
    .then((signInUserData)=>{
      //vytiahnutie potrebnych dat o prihlasenom uzivatelovi
      firebase.database().ref('users/' + signInUserData.user.uid)
      .once('value', (userDataSnapshot)=>{
        //update userData po uspesnom prihlaseni
        commit('setUserData', userDataSnapshot.val())
        commit('setAuthState', true)
      })
    })
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
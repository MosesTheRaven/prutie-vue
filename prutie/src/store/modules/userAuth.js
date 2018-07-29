
import * as firebase from 'firebase'
import {LOGIN as firebaseAPI} from '../../api/firebase/firebase'

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
    firebaseAPI(loginData.email, loginData.password, (userData)=>{
      commit('setUserData', userData)
      commit('setAuthState', true)
    })
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
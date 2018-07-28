import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import store from './store/index'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdsA95YF5wgmvTiiZP0wlPvGV4OZhMDgs",
  authDomain: "vrbove-prutie.firebaseapp.com",
  databaseURL: "https://vrbove-prutie.firebaseio.com",
  projectId: "vrbove-prutie",
  storageBucket: "vrbove-prutie.appspot.com",
  messagingSenderId: "708241133122"
};
firebase.initializeApp(config);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

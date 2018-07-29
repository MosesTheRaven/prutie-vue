<template>
  <v-form>
    <v-text-field label="Meno"
                  v-model="name" required />
    <v-text-field label="Heslo"
                  v-model="password" required />
    <v-btn @click.prevent="initiateLogin">Prihlasit</v-btn>
  </v-form>
</template>

<script>
/* eslint-disable */
  import firebaseApi from '../../api/firebase/firebase'
  import { mapActions } from 'vuex'

  export default {
    name: "Login",
    data() {
      return {
        name : null,
        password : null
      }
    },
    methods: {

        ...mapActions(['login']),

        initiateLogin(){
          firebaseApi.hello
          this.login()
        } 
    }
  }
</script>

<style scoped>

</style>


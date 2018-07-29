<template>
  <v-form>
    <v-text-field label="Meno"
                  v-model="name" required />
    <v-text-field label="Heslo"
                  v-model="password" required />
    <v-btn @click.prevent="initiateLogin">Prihlasit</v-btn>
    <p>nieco {{ isAttemptedTry }}</p>
    <v-alert v-if="isAttemptedTry" :value="true" type="error">Chybne prihlasovacie udaje</v-alert>
  </v-form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'


  export default {
    name: "Login",
    computed : mapGetters(['isLoggedIn', 'isAttemptedTry']),
    data() {
      return {
        name : null,
        password : null
      }
    },
    methods: {

        ...mapActions(['login']),

        initiateLogin(){
          this.login({name : this.name, password : this.password})
        } 
    }
  }
</script>

<style scoped>

</style>


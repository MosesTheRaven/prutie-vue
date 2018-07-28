<template>
  <v-form>
    <v-text-field label="Meno"
                  v-model="name" required />
    <v-text-field label="Heslo"
                  v-model="password" required />
    <v-btn @click.prevent="login">Prihlasit</v-btn>
  </v-form>
</template>

<script>
  import * as firebase from 'firebase'
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


    }
  }
</script>

<style scoped>

</style>


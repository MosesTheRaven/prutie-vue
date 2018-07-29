<template>
  <v-form>
    <v-text-field label="Meno"
                  v-model="name" 
                  required />
    <v-text-field label="Heslo"
                  v-model="password" 
                  type="password" 
                  required />
    <v-btn @click.prevent="initiateLogin">Prihlasit</v-btn>
    <v-alert :value="error" type="error">{{ error }}</v-alert>
  </v-form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'


  export default {
    name: "Login",
    computed : {
        ...mapGetters(['isLoggedIn']),
    },
    data() {
      return {
        name : null,
        password : null,
        error : ""
      }
    },
    methods: {

        ...mapActions(['login']),

        initiateLogin(){
          if(this.name != "" && this.password != ""){
            this.login({email : this.name+"@abc.efg", password : this.password})
          }
          else this.error = "Chybne zadane prihlasovacie udaje"
        } 
    }
  }
</script>

<style scoped>

</style>


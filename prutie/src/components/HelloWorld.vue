<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <p>tu bude logo vrboveho prutia</p>
        <h2 v-if="isLoggedIn">Vitaj, {{ getUserData.name }}!</h2>
        <h2 v-else>Prihlaste sa prihlasovacimi udajmi</h2>
        <Login v-if="!isLoggedIn" />
        <Admin v-if="isLoggedIn"/>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Login from "./auth/Login";
import Admin from "./admin/Admin";
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  computed : mapGetters(['isLoggedIn', 'getUserData']),
  components: {
    Login, 
    Admin
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  margin-top: 10px;
  margin-bottom: 10px
}
</style>

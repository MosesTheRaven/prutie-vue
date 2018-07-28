<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <p>tu bude logo vrboveho prutia</p>
        <Login></Login>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Login from "./auth/Login";
export default {
  name: 'HelloWorld',
  components: {Login},
  props: {
    msg: String
  }
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
</style>

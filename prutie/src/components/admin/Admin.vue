<template>
    <v-form>
        <v-label>Pridaj uzivatela s menom a heslom</v-label>    
        <v-text-field label="Meno"
                    v-model="name" 
                    required />
        <v-text-field label="Heslo"
                    v-model="password" 
                    type="password" 
                    required />
        <v-btn @click.prevent="addUserToFirebase">Vytvorit uzivatela</v-btn>
        <v-alert :value="error" type="error">{{ error }}</v-alert>
        <v-alert :value="success" type="success"> {{success}}</v-alert>
  </v-form>
</template>

<script>
import * as firebase from 'firebase'
import FirebaseAPI from '../../api/firebase/firebase'

import { mapActions } from 'vuex'

export default {
    name: 'Admin',
    data()  {
        return {
            name : "",
            password : "",
            error: "",
            success : ""
        }
    },
    methods: {
        addUserToFirebase(){
            //tu by mali byt este kontroly spravnosti textu
            var email = this.name + "@abc.efg"
            FirebaseAPI.createUser({
                email : email, 
                name : this.name, 
                password : this.password
            },
            (message)=>{
                if(message.type == "success") { this.success = message.message; this.error = "" }
                else { this.error = message.message; this.success = "" } 
            })
        }
    }
}
</script>

<style>

</style>

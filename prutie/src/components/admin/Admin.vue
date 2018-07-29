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
        <v-btn @click.prevent="addUser">Vytvorit uzivatela</v-btn>
        <v-alert :value="error" type="error">{{ error }}</v-alert>
        <v-alert :value="success" type="success"> {{success}}</v-alert>
  </v-form>
</template>

<script>
import * as firebase from 'firebase'
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
        //funkcia na pridavanie uzivatelov do firebase
        addUser(){
            var email = this.name + "@abc.efg"
            console.log(email, this.password)
            //vytvorenie uzivatela v auth firebase
            firebase.auth().createUserWithEmailAndPassword(email, this.password)
            .then((data)=>{
                //pridanie uzivatela do db firebase
                firebase.database().ref('users/' + data.user.uid).set(
                {
                    uid : data.user.uid,
                    name : this.name,
                })
                //oboznamenie uzivatela o vysledku pridavania uzivatela1
                .then(()=>{
                    this.success = "Uzivatel bol uspesne pridany!"
                    this.error = ""
                })
            })
            .catch((error)=>{
                this.success = ""
                this.error = "Pri pridavani uzivatela doslo k chybe!"
                console.log(error, error.message)
            })
        }
    }
}
</script>

<style>

</style>

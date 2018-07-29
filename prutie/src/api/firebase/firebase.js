
import * as firebase from 'firebase'

const FirebaseAPI = {
    login : (email, password, processFn) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((signInUserData)=>{
          //vytiahnutie potrebnych dat o prihlasenom uzivatelovi
          firebase.database().ref('users/' + signInUserData.user.uid)
          .once('value', (userDataSnapshot) => processFn({type : "success",data : userDataSnapshot.val()}))})
        .catch((error)=>{
            processFn({
                type : "error",
                data : "Chybne zadane prihlasovacie udaje"
            })
        })
    },
    createUser : (loginData, processFn) => {
        //vytvorenie uzivatela v auth firebase
        firebase.auth().createUserWithEmailAndPassword(loginData.email, loginData.password)
        .then((data)=>{
            //pridanie uzivatela do db firebase
            firebase.database().ref('users/' + data.user.uid).set(
            {
                uid : data.user.uid,
                name : loginData.name,
            })
            //oboznamenie uzivatela o vysledku pridavania uzivatela1
            .then(()=>processFn({type: 'success', message: "Uzivatel bol uspesne pridany!"}))
        })
        .catch((error)=>processFn({type: 'error', message: "Pri pridavani uzivatela doslo k chybe!\n"+error.message}))
    }
}

export default FirebaseAPI

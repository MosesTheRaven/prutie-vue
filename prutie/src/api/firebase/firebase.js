
import * as firebase from 'firebase'

login = (email, password, processFn) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((signInUserData)=>{
      //vytiahnutie potrebnych dat o prihlasenom uzivatelovi
      firebase.database().ref('users/' + signInUserData.user.uid)
      .once('value', (userDataSnapshot) => processFn(userDataSnapshot.val()))
    })
}
hello = ()=>{console.log('hello')}

export const LOGIN = login
export var hello = hello
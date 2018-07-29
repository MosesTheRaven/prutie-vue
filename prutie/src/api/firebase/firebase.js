import * as firebase from 'firebase'

export default{
    userData : null,

    hello() {
        console.log('hehe')
    }, 

    login(name, password){
        firebase.database().ref('users/')
        .on('child_added', (userDataSnapshot)=>{
            if(name == userDataSnapshot.key && password == userDataSnapshot.val()) this.userData.name = userDataSnapshot.key;
        })
        .then(()=>{
            if(this.userData) return true;
            return false;
        })
    }
}
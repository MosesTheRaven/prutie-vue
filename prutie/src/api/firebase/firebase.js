
import * as firebase from 'firebase'
import { mapMutations } from 'vuex'

export default{

    users : {},

    methods : mapMutations(['setUserData', 'setAuthState']),

    login(loginData){
        console.log('firebase login')
        
    }
}
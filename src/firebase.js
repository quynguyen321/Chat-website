import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCBdqNK8uaDVf7NuANVtyf2J5_CuY7VKbQ",
    authDomain: "auth-dev-c3981.firebaseapp.com",
    projectId: "auth-dev-c3981",
    storageBucket: "auth-dev-c3981.appspot.com",
    messagingSenderId: "645220360483",
    appId: "1:645220360483:web:cfd9a3a8edd0c85f1a6c96"

})

export const auth = app.auth()
export default app
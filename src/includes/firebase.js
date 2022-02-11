import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAfjN-ZmEmbmSmGJYFggPA0-4gAMxPDZi4",
    authDomain: "music-1a018.firebaseapp.com",
    projectId: "music-1a018",
    storageBucket: "music-1a018.appspot.com",
    appId: "1:574100746957:web:2a00e17692e42d065e6f84"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');

export {
    auth, db, usersCollection
}
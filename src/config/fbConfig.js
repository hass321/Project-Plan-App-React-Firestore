// firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAC6mJ_6rvw2XDVPeknd88uzrSH5In6slI",
    authDomain: "projectplan-cb3be.firebaseapp.com",
    databaseURL: "https://projectplan-cb3be.firebaseio.com",
    projectId: "projectplan-cb3be",
    storageBucket: "projectplan-cb3be.appspot.com",
    messagingSenderId: "14171442757"
  };

  firebase.initializeApp(config);

  export default firebase;
import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyDbgEn2RU6dC4IGxVjxGH9-Nx5p8k1GONs",
    authDomain: "willy-app-8ebc6.firebaseapp.com",
    projectId: "willy-app-8ebc6",
    storageBucket: "willy-app-8ebc6.appspot.com",
    messagingSenderId: "956358084647",
    appId: "1:956358084647:web:8dd91a7591f295b5166602"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
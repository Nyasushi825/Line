import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAD5crKZtRTWSD8X2DuG8Qr1owMZrWn3gk",
    authDomain: "line-clone-b759f.firebaseapp.com",
    projectId: "line-clone-b759f",
    storageBucket: "line-clone-b759f.appspot.com",
    messagingSenderId: "54165728714",
    appId: "1:54165728714:web:afeb79425d45cf68a2b333" 
})

const db = firebaseApp.firestore();

const auth = firebase.auth();
// どのユーザーがLoginしているかの確認

export {db,auth};


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJO_dlIXNW4Y4xo13w9F_5x7KcBeMtU-s",
    authDomain: "e-commerce-111a8.firebaseapp.com",
    projectId: "e-commerce-111a8",
    storageBucket: "e-commerce-111a8.appspot.com",
    messagingSenderId: "426017450740",
    appId: "1:426017450740:web:a0bb76ff235bb7994dcca1",
    measurementId: "G-D1QN22FVKF"
  };
  
 const firebaseApp=firebase.initializeApp(firebaseConfig);
 
 const db=firebaseApp.firestore();
 const auth=firebase.auth();

export {db,auth} ;

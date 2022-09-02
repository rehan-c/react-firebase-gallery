import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDUx5E1i3RDiVSz5-EABptjPnFu9DbDQ8",
    authDomain: "react-firebase-gallery-e3b99.firebaseapp.com",
    projectId: "react-firebase-gallery-e3b99",
    storageBucket: "react-firebase-gallery-e3b99.appspot.com",
    messagingSenderId: "30116659333",
    appId: "1:30116659333:web:916610712c6d2c498769ec"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
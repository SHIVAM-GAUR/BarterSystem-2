import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCK_YLSFG7AsonfpTO-jjnrc73FrnU5g70",
    authDomain: "book-santa-18dda.firebaseapp.com",
    projectId: "book-santa-18dda",
    storageBucket: "book-santa-18dda.appspot.com",
    messagingSenderId: "740474786845",
    appId: "1:740474786845:web:6ed9d5f53ca88dad11e2f4"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCC4p8OpE4Nf647ts1UYVcS6_7FKB9byiw",
    authDomain: "linkedin-clone-2464a.firebaseapp.com",
    projectId: "linkedin-clone-2464a",
    storageBucket: "linkedin-clone-2464a.appspot.com",
    messagingSenderId: "211646678410",
    appId: "1:211646678410:web:67b656ab43015c3c38f473"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};
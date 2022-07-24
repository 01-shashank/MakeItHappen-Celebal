import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkkRbX6olUsV9XVFOqf0Jxnbdk60l__l8",
    authDomain: "makeithappen-celebal.firebaseapp.com",
    projectId: "makeithappen-celebal",
    storageBucket: "makeithappen-celebal.appspot.com",
    messagingSenderId: "1033640715168",
    appId: "1:1033640715168:web:e4119f2f316eaadaa4fac5",
    measurementId: "G-4KJQ1BCT2R"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  //explicit exports

  export default db;
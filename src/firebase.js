import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCESIeXMdorZr2E3c5jBJePaNSTT_ssDIE',
  authDomain: 'clone-c8cd7.firebaseapp.com',
  projectId: 'clone-c8cd7',
  storageBucket: 'clone-c8cd7.appspot.com',
  messagingSenderId: '682394796749',
  appId: '1:682394796749:web:6ee6fec2debf3dc8ac1f84',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// google provider
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

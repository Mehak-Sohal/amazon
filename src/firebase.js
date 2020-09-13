import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAapIMk2w7X8JrNHBxHgIf_SM_wJNI_hqQ",
    authDomain: "fir-53861.firebaseapp.com",
    databaseURL: "https://fir-53861.firebaseio.com",
    projectId: "fir-53861",
    storageBucket: "fir-53861.appspot.com",
    messagingSenderId: "873479468368",
    appId: "1:873479468368:web:ac6873d5aad232831e6855",
    measurementId: "G-H05W4G79MW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };
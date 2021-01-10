// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAIaeFu3reStJwCu-VMzJWvKzwPR5Uc1WE',
  authDomain: 'clone-bbcf1.firebaseapp.com',
  projectId: 'clone-bbcf1',
  storageBucket: 'clone-bbcf1.appspot.com',
  messagingSenderId: '622022352163',
  appId: '1:622022352163:web:98d97aa3c6d24ea8d98096',
  measurementId: 'G-9T71D4EYPT',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

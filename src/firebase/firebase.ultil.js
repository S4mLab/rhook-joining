import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB_t8Q7Lgq1SF-OLq_pqOk-Z3evFL1DMTo",
  authDomain: "rhook-join.firebaseapp.com",
  databaseURL: "https://rhook-join.firebaseio.com",
  projectId: "rhook-join",
  storageBucket: "rhook-join.appspot.com",
  messagingSenderId: "139910512846",
  appId: "1:139910512846:web:de913daba706b3e8bcd09f",
  measurementId: "G-F8TGX6MLFZ"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJT_7o-alFByu0vnTfRAlPn3Th-3guNbQ",
  authDomain: "twitter-clone-6dbbd.firebaseapp.com",
  databaseURL: "https://twitter-clone-6dbbd-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-6dbbd",
  storageBucket: "twitter-clone-6dbbd.appspot.com",
  messagingSenderId: "125437616251",
  appId: "1:125437616251:web:b582e4ee04400c897902de",
  measurementId: "G-X7BNSBCQ0B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;








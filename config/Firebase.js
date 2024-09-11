// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9I7f1Ljy9oZA23ggOwQk76WFzpW6J28",
  authDomain: "rn-expensify-10a60.firebaseapp.com",
  projectId: "rn-expensify-10a60",
  storageBucket: "rn-expensify-10a60.appspot.com",
  messagingSenderId: "705864315594",
  appId: "1:705864315594:web:31e992c590493232bdfa33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripRef = collection(db,'trips');
export const expensesRef = collection(db, 'expenses');

export default app;

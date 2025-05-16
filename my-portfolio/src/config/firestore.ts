// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE6ZepX3wffthe20k431zXkw_a1P8FS0I",
  authDomain: "my-portfolio-2f4dc.firebaseapp.com",
  projectId: "my-portfolio-2f4dc",
  storageBucket: "my-portfolio-2f4dc.firebasestorage.app",
  messagingSenderId: "70784490609",
  appId: "1:70784490609:web:472b5693b479f309948fd0",
  measurementId: "G-JE0YRTTT0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log(db);
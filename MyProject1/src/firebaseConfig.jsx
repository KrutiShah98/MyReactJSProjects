// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50wgZzVxS1u0Cu-O4eoMn0LUN8OVTHXA",
  authDomain: "fbreactjs-fa8a7.firebaseapp.com",
  projectId: "fbreactjs-fa8a7",
  storageBucket: "fbreactjs-fa8a7.appspot.com",
  messagingSenderId: "281492343060",
  appId: "1:281492343060:web:cd45e11b472f0e97471a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);
const storage=getStorage(app)
export {auth,db,storage};

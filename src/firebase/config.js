
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxj2w1o3Zwl7WlSkcHLELKIYzKiiOptAc",
  authDomain: "las-araucarias-6ca89.firebaseapp.com",
  projectId: "las-araucarias-6ca89",
  storageBucket: "las-araucarias-6ca89.appspot.com",
  messagingSenderId: "138710611810",
  appId: "1:138710611810:web:548a2087c5745e263f5e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7AUL9aJfEGBWuRxWC4jurSudFGJfbKqk",
  authDomain: "buymore-43c29.firebaseapp.com",
  projectId: "buymore-43c29",
  storageBucket: "buymore-43c29.appspot.com",
  messagingSenderId: "881006665752",
  appId: "1:881006665752:web:b08709262c092181dca36d",
  measurementId: "G-CXEPV1D80S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
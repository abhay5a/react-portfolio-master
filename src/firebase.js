import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn6VSlVPI_lyGX4NbrXpJMj3ZCJfA7sXE",
  authDomain: "bhardwajabhay6789-portfolio.firebaseapp.com",
  projectId: "bhardwajabhay6789-portfolio",
  storageBucket: "bhardwajabhay6789-portfolio.appspot.com",
  messagingSenderId: "247425388402",
  appId: "1:247425388402:web:3a1dfad5695fb3276597eb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

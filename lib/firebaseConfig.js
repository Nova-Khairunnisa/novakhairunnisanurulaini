// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqyLvSz-OnRO5piV3BjtCS5gKUt6vyeOQ",
  authDomain: "portfolio-app-68c19.firebaseapp.com",
  projectId: "portfolio-app-68c19",
  storageBucket: "portfolio-app-68c19.appspot.com", 
  messagingSenderId: "837121067284",
  appId: "1:837121067284:web:ac5277c0507f78ec339a01",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

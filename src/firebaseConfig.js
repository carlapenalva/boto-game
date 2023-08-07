import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfN4KcCZr6P5o80nuObzP2AyzRX8a2lJE",
  authDomain: "boto-games.firebaseapp.com",
  projectId: "boto-games",
  storageBucket: "boto-games.appspot.com",
  messagingSenderId: "1026319058683",
  appId: "1:1026319058683:web:f0f0cdcfb331309cbbd25e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

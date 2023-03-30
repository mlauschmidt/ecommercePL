import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClbNVNDDMoZ1jWpeyHNngBceJhp-dQsDI",
  authDomain: "piedralibre-ecommerce.firebaseapp.com",
  projectId: "piedralibre-ecommerce",
  storageBucket: "piedralibre-ecommerce.appspot.com",
  messagingSenderId: "584171201455",
  appId: "1:584171201455:web:b5691f67888d7a785d455a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

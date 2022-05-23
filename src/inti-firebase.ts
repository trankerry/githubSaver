import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYXukMacN_YV26RDedXEGACD3-LxRp5EQ",
  authDomain: "githubuser-saver.firebaseapp.com",
  projectId: "githubuser-saver",
  storageBucket: "githubuser-saver.appspot.com",
  messagingSenderId: "28105061017",
  appId: "1:28105061017:web:e13f237eb4e1e8aed17e08",
  measurementId: "G-3VC3PM2KTZ"
};

//initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Firestore
export const db = getFirestore(app);

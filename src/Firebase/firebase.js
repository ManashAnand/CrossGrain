
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAkc68mCiG9VXVryyySOzHdovnY1Ux4onw",
  authDomain: "farmer-database-8cf47.firebaseapp.com",
  projectId: "farmer-database-8cf47",
  storageBucket: "farmer-database-8cf47.appspot.com",
  messagingSenderId: "405985010386",
  appId: "1:405985010386:web:bf4f6be7ec5c8672d0830b",
//   databaseURL: "https://console.firebase.google.com/project/farmer-database-8cf47/database/farmer-database-8cf47-default-rtdb/data/~2F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
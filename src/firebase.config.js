
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: (import.meta.env.VITE_FIREBASE_KEY),
  authDomain: "giftkart-e-commerce.firebaseapp.com",
  projectId: "giftkart-e-commerce",
  storageBucket: "giftkart-e-commerce.appspot.com",
  messagingSenderId: (import.meta.env.VITE_MESSAGING_SENDER_ID) ,
  appId: (import.meta.env.VITE_APP_ID)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
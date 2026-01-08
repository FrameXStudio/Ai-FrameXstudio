// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgOTB6T2qFs-FzkMbWX2p6MsNt-KW7fcc",
  authDomain: "ai-digital-studios.firebaseapp.com",
  projectId: "ai-digital-studios",
  storageBucket: "ai-digital-studios.firebasestorage.app",
  messagingSenderId: "784336317884",
  appId: "1:784336317884:web:5c19d1f75b6da257268fb9",
  measurementId: "G-MKG8B9BPMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Analytics (optional)
export const analytics = getAnalytics(app);

export default app;

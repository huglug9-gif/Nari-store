import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqyKD4uqDvEy7n_pnGrpY02C-NToqVRb8",
  authDomain: "nari-fashion-947a7.firebaseapp.com",
  projectId: "nari-fashion-947a7",
  storageBucket: "nari-fashion-947a7.firebasestorage.app",
  messagingSenderId: "529668256601",
  appId: "1:529668256601:web:b3cc39c8ea7c783133d248",
  measurementId: "G-6QLMB312CM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

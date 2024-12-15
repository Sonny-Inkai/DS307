import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxF5jQWO1m98oYSTmp_PPziJFbNKZz2Dg",
  authDomain: "hotel-recommender-ce410.firebaseapp.com",
  projectId: "hotel-recommender-ce410",
  storageBucket: "hotel-recommender-ce410.firebasestorage.app",
  messagingSenderId: "490070163545",
  appId: "1:490070163545:web:2cf03bd25be93882f73148",
  measurementId: "G-HER68PPCEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
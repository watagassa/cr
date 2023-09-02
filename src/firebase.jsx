// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCOkCig7WiezrLehuHgJrQ9hHcuJ8lE-Hc",
  authDomain: "test-3d26d.firebaseapp.com",
  projectId: "test-3d26d",
  storageBucket: "test-3d26d.appspot.com",
  messagingSenderId: "764282136379",
  appId: "1:764282136379:web:b3adf7aaeb982cc6d8391e",
  measurementId: "G-SEGY5JKEC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
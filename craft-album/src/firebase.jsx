// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
const db = getFirestore(app);
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export default storage;
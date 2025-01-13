import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALO7jzBHW-Sl8cPJJRWSnRyZUq_GGmFqQ",
    authDomain: "portofoliov5-e9f3b.firebaseapp.com",
    projectId: "portofoliov5-e9f3b",
    storageBucket: "portofoliov5-e9f3b.firebasestorage.app",
    messagingSenderId: "545372581013",
    appId: "1:545372581013:web:b1d08891a48b5ad8b83f9c",
    measurementId: "G-QW4RBBZ6VQ"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
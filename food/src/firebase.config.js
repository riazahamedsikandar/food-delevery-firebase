import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWV7SjnD52ImhXU8jX59KxJAu3YXqj0Yc",
    authDomain: "food-delivery-47a01.firebaseapp.com",
    projectId: "food-delivery-47a01",
    storageBucket: "food-delivery-47a01.appspot.com",
    messagingSenderId: "607483601576",
    appId: "1:607483601576:web:6711b9f9ebd3adccea989d",
    measurementId: "G-DWBZP1WTS8"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
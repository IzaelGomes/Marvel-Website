import {initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzVTIUeiriYQS7FAXy7YhEWrpUiG7Giv4",
  authDomain: "marvel-54f07.firebaseapp.com",
  projectId: "marvel-54f07",
  storageBucket: "marvel-54f07.appspot.com",
  messagingSenderId: "811738368533",
  appId: "1:811738368533:web:787cddfae2a9ad01719c1c",
  measurementId: "G-WSFF9ECPGG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
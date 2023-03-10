// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMI3h-ApsW0hxJLhp2IZWNjKrQY5PKMyo",
  authDomain: "react-firebase-form-8289f.firebaseapp.com",
  databaseURL: "https://react-firebase-form-8289f-default-rtdb.firebaseio.com",
  projectId: "react-firebase-form-8289f",
  storageBucket: "react-firebase-form-8289f.appspot.com",
  messagingSenderId: "257878158447",
  appId: "1:257878158447:web:4b4a9c3fc1798e1da3319a",
  measurementId: "G-J9CX9ER39H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
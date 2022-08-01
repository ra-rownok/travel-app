// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARWWbCK6OJ25x6Avh4LKDui34lqIY6dco",
  authDomain: "travel-app-651bf.firebaseapp.com",
  projectId: "travel-app-651bf",
  storageBucket: "travel-app-651bf.appspot.com",
  messagingSenderId: "918639272140",
  appId: "1:918639272140:web:3aee24506c8929d21e2269",
  measurementId: "G-0NH91ZN91L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
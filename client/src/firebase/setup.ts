import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaIQ3GWgqqAywf9-DEr_qxCh4W0o4XqQM",
  authDomain: "imagert-9b377.firebaseapp.com",
  projectId: "imagert-9b377",
  storageBucket: "imagert-9b377.appspot.com",
  messagingSenderId: "880390163185",
  appId: "1:880390163185:web:528ca4fbb4f1d227e4f750",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

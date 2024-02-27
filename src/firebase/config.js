import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZEIPuEeVVu0McEoOfAZBhT90vKUeGgAY",
  authDomain: "maison-namaste.firebaseapp.com",
  projectId: "maison-namaste",
  storageBucket: "maison-namaste.appspot.com",
  messagingSenderId: "10742182164",
  appId: "1:10742182164:web:2478734c2af66ff4021201",
  measurementId: "G-2XKMT7BH81"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACAo3ni8D7rexxcCrgaJ2rB8cm0g-L12M",
  authDomain: "hotstar-clone-75dd2.firebaseapp.com",
  projectId: "hotstar-clone-75dd2",
  storageBucket: "hotstar-clone-75dd2.appspot.com",
  messagingSenderId: "742553184202",
  appId: "1:742553184202:web:e294e2737248a669251133"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
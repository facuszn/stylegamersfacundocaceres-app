import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAd5UUyuQU3ngMJMQQca4Vaw23A8qc1tEo",
  authDomain: "coderhouse-react-d416b.firebaseapp.com",
  projectId: "coderhouse-react-d416b",
  storageBucket: "coderhouse-react-d416b.appspot.com",
  messagingSenderId: "346190338485",
  appId: "1:346190338485:web:f688d6bb1f0800f59ce1fc",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};

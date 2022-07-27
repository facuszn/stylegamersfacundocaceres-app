import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd5UUyuQU3ngMJMQQca4Vaw23A8qc1tEo",
  authDomain: "coderhouse-react-d416b.firebaseapp.com",
  projectId: "coderhouse-react-d416b",
  storageBucket: "coderhouse-react-d416b.appspot.com",
  messagingSenderId: "346190338485",
  appId: "1:346190338485:web:f688d6bb1f0800f59ce1fc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async (categoryId) => {
  if (categoryId) {
    return await getProductsByCategoryId(categoryId);
  } else {
    return await getAllProducts();
  }
};

export const getProductById = async (productId) => {
   return (await getDoc(doc(db, "items", productId))).data();
};


export const getProductsByCategoryId = async (categoryId) => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection, where("categoria", "==", categoryId));
  return await getDocs(q);
};

export const getAllProducts = async () => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection);
  return await getDocs(q);
};
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../config/firebase.js';

const PRODUCTS = collection(db, 'products');

export const getAll = async () => {
  const snapshot = await getDocs(PRODUCTS);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getById = async id => {
  const ref = doc(PRODUCTS, id);
  const docSnap = await getDoc(ref);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export const create = async data => {
    const clean = {
    name: data.name,
    price: Number(data.price) 
  };
 console.log('🧪 Tipos enviados a Firestore:', clean);
 console.log('🧪 Tipos:', {
    name: typeof clean.name,
    price: typeof clean.price
  });
try {
    const docRef = await addDoc(PRODUCTS, clean);
    return { id: docRef.id, ...clean };
  } catch (error) {
    console.error('❌ Error en Firestore:', error.message);
    throw error;
  }
// const docRef = await addDoc(PRODUCTS, data);
// return { id: docRef.id, ...data };
      
};

export const remove = async id => {
  const ref = doc(PRODUCTS, id);
  await deleteDoc(ref);
};

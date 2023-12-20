// src/firebase/firestore.js
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import app from "./firebaseInit";

export const db = getFirestore(app);

export const addMessage = async (message) => {
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            ...message,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    const messages = [];
    querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
    });
    return messages;
};
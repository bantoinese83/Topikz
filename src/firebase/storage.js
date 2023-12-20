// src/firebase/storage.js
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from './firestore';
import { collection, addDoc } from 'firebase/firestore';
import app from "./firebaseInit"; // Import app from firebaseInit.js


const storage = getStorage(app);

export const uploadVideo = async (file) => {
    // Create a storage reference
    const storageRef = ref(storage, `videos/${file.name}`);
    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);
    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    // Save video data in Firestore
    const videoRef = await addDoc(collection(db, 'videos'), {
        url: downloadURL,
        // Add any other video metadata here
        createdAt: new Date(),
    });
    console.log('Video uploaded with ID:', videoRef.id);
    return videoRef;
};

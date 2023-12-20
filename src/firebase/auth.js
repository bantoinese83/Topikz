// src/firebase/auth.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseInit";

const auth = getAuth(app);

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
    return signOut(auth);
};
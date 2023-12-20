// src/firebase/firebaseInit.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAcBUCi3f1_4qlIThkDKR2a1y_S9l_mS1w",
    authDomain: "live-chat-app-a2954.firebaseapp.com",
    projectId: "live-chat-app-a2954",
    storageBucket: "live-chat-app-a2954.appspot.com",
    messagingSenderId: "720941722148",
    appId: "1:720941722148:web:768e5b4ce0ac0e4a65c6b1",
    measurementId: "G-Z535WSCCKW"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export default app;

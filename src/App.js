// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import VideoUploadForm  from "./components/ChatRoom/VideoUploadForm";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/chat" element={<ChatRoom />} />
                    <Route path="/" element={<ChatRoom />} />
                    <Route path="/upload" element={<VideoUploadForm />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
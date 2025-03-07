import './App.css'
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import {Route, Routes, useNavigate} from "react-router";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();
    const token = '';

    useEffect(() => {
        if (token) {
            navigate('/profile');
        } else {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App

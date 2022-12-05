import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogPage from "./pages/blogpage/BlogPage"
import BlogOverview from "./pages/blogoverview/BlogOverview";
import NotFound from "./pages/notfound/NotFound";
import Navigation from "./components/navigation/Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import "./App.css";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log("first " + isAuthenticated);
    return (
        <>
            <div className="top-bar">
                <Navigation toggleIsAuthenticated={toggleIsAuthenticated} isAuthenticated={isAuthenticated}/>
            </div>
            <div className="nav-menu">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blogpage/:id"
                           element={isAuthenticated === true ? <BlogPage/> : <Navigate to="/"/>}/>
                    <Route path="/blogoverview"
                           element={isAuthenticated === true ? <BlogOverview/> : <Navigate to="/"/>}/>
                    <Route path="/login" element={<Login isAuthenticated={isAuthenticated}
                                                         toggleIsAuthenticated={toggleIsAuthenticated}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

            </div>
        </>
    );
}

export default App;

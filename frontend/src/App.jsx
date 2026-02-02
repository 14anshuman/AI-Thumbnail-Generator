import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Generate from "./pages/Generate";
import MyGenerations from "./pages/MyGenerations";
import YtPreview from "./pages/YtPreview";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import Profile from "./components/auth/Profile";
import {Toaster} from "react-hot-toast";



export default function App() {
    const pathName=useLocation()


    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathName])
    return (
        <>
        
            <Toaster position="top-right"/>
            <LenisScroll />
            <Navbar />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>
           
           <Routes>
           <Route path="/login" element={<Login />} />
        

           <Route path="/" element={<HomePage />} />
           <Route path="/generate" element={<Generate/>} />
           <Route path="/generate/:id" element={<Generate/>} />
           <Route path="/my-generations" element={<MyGenerations />} />
           <Route path="/preview" element={<YtPreview/>} />
           <Route path="/profile" element={<Profile/>}/>
           </Routes>

            <Footer />
            
        </>
    );
}
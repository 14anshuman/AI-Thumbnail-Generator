import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HeroSection() {


    const navigate=useNavigate();

    const isAuthenicated=useAuth();
    const handleNavigate=async()=>{

        if(isAuthenicated){
            navigate('/generate')

        }else{
            navigate('/login')
        }

    }

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>
            <motion.section className="flex flex-col items-center">
                <motion.div className="flex items-center gap-3 mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p>Smart, Fast, Always Active.</p>
                    
                </motion.div>
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-3 font-semibold tracking-tight max-w-3xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    AI Thumbnail Generator for 
                    your videos
                </motion.h1>
                <motion.p className="text-center text-gray-100 text-base/7 max-w-md mt-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                Stop wasting hours on design. Get high-converting thumbnails in sconds with our advanced AI.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button onClick={handleNavigate} className="btn max-md:w-full glass py-3">
                        Generate now
                    </button>
                    <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                        <a href="#howitworks">
                        {/* <PlayCircleIcon className="size-4" /> */}
                        How it works
                        </a>
                    </button>
                </motion.div>
            </motion.section>
        </>
    );
}
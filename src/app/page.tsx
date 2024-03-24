"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import "./styles/App.css";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Cursor from "./customs/Cursor";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2200);
    }, []);
    return (
        <main className="relative">
            <svg viewBox="0 0 400 400" style={{ display: "none" }}>
                <filter id="grainy-overlay">
                    <feTurbulence type="fractalNoise" baseFrequency="1.3" />
                </filter>
            </svg>
            <Cursor isHovering={isHovered} />
            <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
            <Header />
            <Hero setIsHovered={setIsHovered} />
            <About />
        </main>
    );
}

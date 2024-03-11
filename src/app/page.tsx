"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/App.css";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

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
        <main>
            <svg viewBox="0 0 400 400" style={{ display: "none" }}>
                <filter id="grainy-overlay">
                    <feTurbulence type="fractalNoise" baseFrequency="1.3" />
                </filter>
            </svg>
            <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
            <Header />
            <Hero />
            <About />
        </main>
    );
}

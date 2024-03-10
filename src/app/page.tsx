"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/App.css";
import Lenis from "@studio-freight/lenis";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <main>
            <svg viewBox="0 0 400 400" style={{ display: "none" }}>
                <filter id="grainy-overlay">
                    <feTurbulence type="fractalNoise" baseFrequency="1.3" />
                </filter>
            </svg>
            <Header />
            <Hero />
        </main>
    );
}

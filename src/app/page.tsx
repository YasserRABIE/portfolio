"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import "./styles/App.css";
import Lenis from "@studio-freight/lenis";
import Loader from "./customs/Loader";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/Projects";
import PageTransition from "./customs/PageTransition";
import Contact from "./pages/Contact";
import Cursor from "./customs/Cursor";
import Footer from "./components/Footer";

export default function Home() {
   const [isHovered, setIsHovered] = useState(false);
   const [isProject, setIsProject] = useState(false);
   const [isContactLink, setIsContactLink] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [isClicked, setIsClicked] = useState(false);
   const [transitionTitle, setTransitionTitle] = useState("");

   const startPageTransition = (pageTitle: string) => {
      setTransitionTitle(pageTitle);
      setIsClicked(true);
      setTimeout(() => {
         setIsClicked(false);
      }, 2000);
   };

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
      <>
         <main className="relative">
            <svg viewBox="0 0 400 400" style={{ display: "none" }}>
               <filter id="grainy-overlay">
                  <feTurbulence type="fractalNoise" baseFrequency="2.3" />
               </filter>
            </svg>
            <Cursor isHovering={isHovered} hoveringProject={isProject} isContactLink={isContactLink} />
            <AnimatePresence>
               {isLoading && <Loader />}
               {isClicked && <PageTransition transitionTitle={transitionTitle} />}
            </AnimatePresence>
            <Header pageTransitions={startPageTransition} />
            <Hero setIsHovered={setIsHovered} />
            <div className=" bg-dark-primary">
               <About setIsHovered={setIsHovered} />
               <Projects setHoveringProject={setIsProject} />
            </div>
            <Contact setIsContactLink={setIsContactLink} />
            <Footer />
         </main>
      </>
   );
}

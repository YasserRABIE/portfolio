"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";

export default function Cursor() {
    const size = 20;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 30, stiffness: 300, mass: 0.4 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - size / 2);
        mouse.y.set(clientY - size / 2);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mousemove", manageMouseMove);
    });
    return (
        <motion.div
            style={{
                width: size,
                height: size,
                left: smoothMouse.x,
                top: smoothMouse.y,
                zIndex: 999999,
            }}
            className="top-0 left-0 fixed rounded-full bg-white  mix-blend-exclusion pointer-events-none"
        ></motion.div>
    );
}

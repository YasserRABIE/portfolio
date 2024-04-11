"use client";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect } from "react";

export default function Cursor({ isHovering, hoveringProject }: { isHovering: boolean; hoveringProject: boolean }) {
    const cursorVariants = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: hoveringProject ? 5 : isHovering ? 13 : 1,
            transition: {
                type: "tween",
                duration: 0.6,
                ease: "backOut",
            },
        },
        exit: {
            scale: 1,
            transition: {
                type: "tween",
                duration: 0.6,
                ease: "backInOut",
            },
        },
    };

    const size = 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 30, stiffness: 300, mass: 0.4 };

    const smoothMouse = {
        x: mouse.x,
        y: mouse.y,
    };

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - size / 2 + size);
        mouse.y.set(clientY - size / 2 + size);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mousemove", manageMouseMove);
    });
    return (
        <>
            {!hoveringProject && (
                <motion.div
                    variants={cursorVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                        width: size,
                        height: size,
                        x: smoothMouse.x,
                        y: smoothMouse.y,
                        zIndex: 999999,
                        backgroundColor: "white",
                        mixBlendMode: "exclusion",
                    }}
                    className="fixed -top-[20px] -left-[20px] rounded-full  pointer-events-none "
                ></motion.div>
            )}
            <AnimatePresence>
                {hoveringProject && (
                    <motion.div
                        variants={cursorVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            width: size,
                            height: size,
                            x: smoothMouse.x,
                            y: smoothMouse.y,
                            zIndex: 999999,
                            backgroundColor: "#E0E0DF",
                        }}
                        exit="exit"
                        className=" flex items-center justify-center  fixed -top-[20px] -left-[20px] rounded-full  pointer-events-none "
                    >
                        <ArrowUpRight size={10} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

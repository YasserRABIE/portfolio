"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor({ isHovering, hoveringProject }: { isHovering: boolean; hoveringProject: boolean }) {
    const cursor = useRef(null);
    const projectsCursor = useRef(null);
    const cursorVariants = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: isHovering ? 13 : 1,
            transition: {
                type: "tween",
                duration: 0.6,
                ease: "backOut",
            },
        },
    };

    const size = 20;

    useEffect(() => {
        const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
        const xMoveProjectsCursor = gsap.quickTo(projectsCursor.current, "left", { duration: 0.45, ease: "power3" });
        const yMoveProjectsCursor = gsap.quickTo(projectsCursor.current, "top", { duration: 0.45, ease: "power3" });

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            xMoveCursor(clientX - size / 2);
            yMoveCursor(clientY - size / 2);
            xMoveProjectsCursor(clientX - size / 2);
            yMoveProjectsCursor(clientY - size / 2);
        });
        return () =>
            window.removeEventListener("mousemove", (e) => {
                const { clientX, clientY } = e;
                xMoveCursor(clientX);
                yMoveCursor(clientY);
                xMoveProjectsCursor(clientX);
                yMoveProjectsCursor(clientY);
            });
    });
    return (
        <motion.div
            ref={cursor}
            variants={cursorVariants}
            initial="initial"
            animate="animate"
            style={{
                width: size,
                height: size,
                zIndex: 999999,
                backgroundColor: "white",
                mixBlendMode: "exclusion",
            }}
            className="fixed rounded-full -top-[20px] -left-[20px] pointer-events-none "
        ></motion.div>
    );
}

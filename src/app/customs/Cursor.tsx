"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor({
   isHovering,
   hoveringProject,
   isContactLink,
}: {
   isHovering: boolean;
   hoveringProject: boolean;
   isContactLink: boolean;
}) {
   const size = 20;
   const labelSize = 100;
   const cursor = useRef(null);
   const cursorLabel = useRef(null);
   const dynamicScale = () => {
      const scale = isHovering ? 13 : hoveringProject ? 7 : isContactLink ? 2.8 : 1;
      return scale;
   };
   const labelVariants = {
      hidden: {
         opacity: 0,
         scale: 0,
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.6, 0.04, 0.98, 0.34],
         },
      },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.6, 0.04, 0.98, 0.34],
         },
      },
   };
   const cursorVariants = {
      initial: {
         scale: 1,
      },
      animate: {
         scale: dynamicScale(),
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.6, 0.04, 0.98, 0.34],
         },
      },
   };

   useEffect(() => {
      const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.8, ease: "power3" });
      const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.8, ease: "power3" });
      const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.7, ease: "power3" });
      const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.7, ease: "power3" });

      window.addEventListener("mousemove", (e) => {
         const { clientX, clientY } = e;
         xMoveCursor(clientX - size / 2);
         yMoveCursor(clientY - size / 2);
         xMoveCursorLabel(clientX - labelSize / 2);
         yMoveCursorLabel(clientY - labelSize / 2);
      });
      return () =>
         window.removeEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            xMoveCursor(clientX);
            yMoveCursor(clientY);
            xMoveCursorLabel(clientX);
            yMoveCursorLabel(clientY);
         });
   });
   return (
      <>
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
               mixBlendMode: hoveringProject ? "normal" : "exclusion",
            }}
            className="fixed rounded-full -top-[20px] -left-[20px] pointer-events-none  md:hidden"
         ></motion.div>
         <motion.p
            ref={cursorLabel}
            variants={labelVariants}
            animate={hoveringProject ? "visible" : "hidden"}
            style={{
               width: labelSize,
               height: labelSize,
            }}
            className="fixed rounded-full text-3xl flex items-center font-mono justify-center font-semibold z-[9999999] pointer-events-none opacity-0 md:hidden"
         >
            VIEW
         </motion.p>
      </>
   );
}

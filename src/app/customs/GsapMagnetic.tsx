import React, { useRef, useEffect, JSXElementConstructor } from "react";
import { ReactNode, ReactElement } from "react";
import { gsap } from "gsap";

function GsapMagnetic({ children }: { children: ReactNode }) {
    let magneticIcon = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (magneticIcon.current) {
            const xTo = gsap.quickTo(magneticIcon.current, "x", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });
            const yTo = gsap.quickTo(magneticIcon.current, "y", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });

            magneticIcon.current.addEventListener("mousemove", (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = magneticIcon.current!.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x);
                yTo(y);
            });

            magneticIcon.current.addEventListener("mouseleave", () => {
                xTo(0);
                yTo(0);
            });
        }
    }, []);

    return React.cloneElement(children as ReactElement<any, string | JSXElementConstructor<any>>, {
        ref: magneticIcon,
    });
}

export default GsapMagnetic;

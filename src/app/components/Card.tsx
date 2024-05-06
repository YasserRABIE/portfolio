import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface props {
   link: string;
   imageSrc: string;
   titles: string[];
   progress: MotionValue<number>;
   range: number[];
   targetScale: number;
}

function Card({ link, imageSrc, titles, progress, range, targetScale }: props) {
   const container = useRef(null);

   const { scrollYProgress } = useScroll({
      target: container,

      offset: ["center end", "start start"],
   });
   const scale = useTransform(progress, range, [1, targetScale]);

   const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
   return (
      <motion.div
         ref={container}
         style={{
            scale,
            top: 0,
         }}
         className="card-container flex items-center justify-center h-screen px-5 sticky"
      >
         <a href={link} target="_blank" className="card w-full overflow-hidden rounded-[10px] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
               style={{
                  scale: imageScale,
               }}
               className="pointer-events-none"
               src={imageSrc}
               alt=""
               loading="lazy"
            />
            <span className="absolute bottom-1 left-0 font-montserrat lg:text-[1rem] sm:text-[0.5rem] text-lg">
               {titles.map((title, index) => {
                  return (
                     <span
                        key={index}
                        className=" ml-2 font-bold  px-5 py-2 md:ml-0 text-white underline mix-blend-difference"
                     >
                        {title}
                     </span>
                  );
               })}
            </span>
         </a>
      </motion.div>
   );
}

export default Card;

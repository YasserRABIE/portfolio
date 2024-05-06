import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3, faGit } from "@fortawesome/free-brands-svg-icons";
import AnimatedSectionTitle from "../components/SectionTitle";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons/faGitAlt";

// variants

const aboutContentContiner = {
   animate: {
      transition: {
         staggerChildren: 0.02,
      },
   },
};

const wordAnmi = {
   initial: {
      y: "150%",
      opacity: 0.2,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.7,
         type: "spring",
         mass: 0.2,
         damping: 20,
         stiffenes: 300,
      },
   },
};

const slideToRight = {
   animate: {
      x: "100%",
      transition: { duration: 1 },
   },
};
// components

function Techonlgies() {
   return (
      <motion.span className=" w-screen  flex items-center justify-around">
         <FontAwesomeIcon
            icon={faHtml5}
            className=" min-w-[100px] md:min-w-[50px] text-white text-[80px] lg:text-[60px] md:text-[40px]"
         />
         <FontAwesomeIcon
            icon={faCss3}
            className=" min-w-[100px] md:min-w-[50px] text-white text-[80px] lg:text-[60px] md:text-[40px]"
         />
         <FontAwesomeIcon
            icon={faReact}
            className=" min-w-[100px] md:min-w-[50px] text-white text-[80px] lg:text-[60px] md:text-[40px]"
         />
         <FontAwesomeIcon
            icon={faJs}
            className=" min-w-[100px] md:min-w-[50px] text-white text-[80px] lg:text-[60px] md:text-[40px]"
         />
         <FontAwesomeIcon
            icon={faGitAlt}
            className=" min-w-[100px] md:min-w-[50px] text-white text-[80px] lg:text-[60px] md:text-[40px]"
         />
      </motion.span>
   );
}

function TechonlgiesMarquee() {
   return (
      <div>
         <span className=" border-light-1 border-y-[6px] lg:border-y-[4px] sm:border-y-[3px] py-5  flex flex-nowrap overflow-x-hidden ">
            <Techonlgies />
         </span>
      </div>
   );
}

const infoAboutMe =
   "I am Yasser, a skilled website developer who creates visually stunning and functional websites. My goal is to ensure that every project I work on is tailored to the specific needs and goals of my clients. If you need a reliable and talented developer to bring your website vision to life, I am here to help.";

function AboutMeText({ setIsHovered }: { setIsHovered: Function }) {
   return (
      <div>
         <motion.p
            variants={aboutContentContiner}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            onMouseEnter={() => {
               setIsHovered(true);
            }}
            onMouseLeave={() => {
               setIsHovered(false);
            }}
            className="flex flex-wrap text-white px-10 text-left  leading-[3.3rem] text-[2.6rem] lg:text-[1.8rem] lg:leading-[2rem] sm:text-[1rem] sm:leading-[1.2rem]"
         >
            {infoAboutMe.split(" ").map((word, index) => (
               <motion.span className="overflow-y-hidden flex" key={index}>
                  <motion.span variants={wordAnmi} className="mr-[10px] md:mr-1">
                     {word}
                  </motion.span>
               </motion.span>
            ))}
         </motion.p>
      </div>
   );
}

function AnimatedSpanText(props: { techonlgy: string }) {
   return (
      <span className="flex overflow-x-hidden">
         <motion.span
            variants={slideToRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative flex flex-nowrap"
         >
            <li className=" w-full">{props.techonlgy}</li>
            <li className=" absolute top-0  w-full -left-[100%]">{props.techonlgy}</li>
         </motion.span>
      </span>
   );
}

function About({ setIsHovered }: { setIsHovered: Function }) {
   return (
      <section id="About" className="w-screen py-20 md:py-0 selection:bg-dark-2">
         <div className="mb-10 flex flex-col mt-10">
            <AnimatedSectionTitle Title="About Me" />
            <AboutMeText setIsHovered={setIsHovered} />
         </div>
         <div>
            <div id="Services" className="flex justify-center">
               <AnimatedSectionTitle Title="Techonlgies i use" />
            </div>
            <TechonlgiesMarquee />
            <div className="flex pr-10 mt-10">
               <span className="flex-1 h-fit">
                  <AnimatedSectionTitle Title="i also use:" />
               </span>
               <div className="flex justify-end">
                  <ul className="text-white font-bebas text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[1.7rem] flex flex-col items-end">
                     <AnimatedSpanText techonlgy="framer motion" />
                     <AnimatedSpanText techonlgy="Tailwind Css" />
                     <AnimatedSpanText techonlgy="next.js" />
                     <AnimatedSpanText techonlgy="qwik" />
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;

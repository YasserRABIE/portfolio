import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faGithub, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import AnimatedSectionTitle from "../components/SectionTitle";

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
    const sliderContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sliderContainer,
        offset: ["center 0.9", "center 0.45"],
    });
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [-1600, 0]);
    const springyProgress = useSpring(scrollProgress, { mass: 0.5, damping: 20, stiffness: 50 });

    return (
        <motion.span
            ref={sliderContainer}
            style={{ x: springyProgress, opacity: scrollYProgress }}
            className=" w-screen  flex items-center justify-around"
        >
            <FontAwesomeIcon icon={faHtml5} className=" min-w-[100px]  text-light-1" fontSize={80} />
            <FontAwesomeIcon icon={faCss3} className=" min-w-[100px]  text-light-1" fontSize={80} />
            <FontAwesomeIcon icon={faReact} className=" min-w-[100px]  text-light-1" fontSize={80} />
            <FontAwesomeIcon icon={faJs} className=" min-w-[100px]  text-light-1" fontSize={80} />
            <FontAwesomeIcon icon={faGithub} className=" min-w-[100px]  text-light-1" fontSize={80} />
        </motion.span>
    );
}

function TechonlgiesMarquee() {
    return (
        <div>
            <span className=" border-light-1 border-y-[6px]  py-5 mt-20 flex flex-nowrap overflow-x-hidden ">
                <Techonlgies />
            </span>
        </div>
    );
}

const infoAboutMe =
    "I am Yasser, a skilled website developer who creates visually stunning and functional websites. My goal is to ensure that every project I work on is tailored to the specific needs and goals of my clients. If you need a reliable and talented developer to bring your website vision to life, I am here to help.";

function AboutMeText() {
    return (
        <div>
            <motion.p
                variants={aboutContentContiner}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap text-light-1 px-10 text-left font-francios leading-[4rem] text-5xl"
            >
                {infoAboutMe.split(" ").map((word, index) => (
                    <motion.span className=" overflow-y-hidden flex" key={index}>
                        <motion.span variants={wordAnmi} className="mr-[10px]">
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
                className="relative w-[500px] flex flex-nowrap "
            >
                <li className="px-4 w-full">{props.techonlgy}</li>
                <li className=" absolute top-0 px-4 w-full -left-[100%]">{props.techonlgy}</li>
            </motion.span>
        </span>
    );
}

function About() {
    return (
        <section id="About" className="w-screen  py-20 selection:bg-dark-2">
            <div className="mb-40 flex flex-col mt-10">
                <AnimatedSectionTitle Title="About Me" />
                <AboutMeText />
            </div>
            <div>
                <div id="Services" className="flex justify-center">
                    <AnimatedSectionTitle Title="Techonlgies i use" />
                </div>
                <TechonlgiesMarquee />
                <div className="flex pr-10 mt-20">
                    <span className=" h-fit">
                        <AnimatedSectionTitle Title="i also use" />
                    </span>
                    <div className="flex-1 flex justify-end">
                        <ul className="text-light-1 font-bebas pr-10 text-[5rem]">
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

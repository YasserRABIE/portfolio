import { motion } from "framer-motion";
import { letterAnmi } from "./animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faGithub, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

// variants
const sectionTitleVariants = {
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.03,
        },
    },
};

const aboutContentContiner = {
    animate: {
        transition: {
            staggerChildren: 0.02,
            delayChildren: 1.5,
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
// components

function Techonlgies() {
    return (
        <span className="grid grid-cols-5 place-content-center w-screen place-items-center">
            <FontAwesomeIcon icon={faHtml5} className=" text-[80px] text-dark-primary" />
            <FontAwesomeIcon icon={faCss3} className=" text-[80px] text-dark-primary" />
            <FontAwesomeIcon icon={faJs} className=" text-[80px] text-dark-primary" />
            <FontAwesomeIcon icon={faReact} className=" text-[80px] text-dark-primary" />
            <FontAwesomeIcon icon={faGithub} className=" text-[80px] text-dark-primary" />
        </span>
    );
}

function TechonlgiesMarquee() {
    return (
        <div>
            <span className=" bg-light-1  py-10 mt-20 flex flex-nowrap overflow-x-hidden ">
                <Techonlgies />
            </span>
        </div>
    );
}

const infoAboutMe =
    "I'm Yasser, a dedicated computer science student hailing from Egypt. Driven by a fervent love for coding and programming, I've discovered my true passion lies in crafting visually captivating user interfaces. With an unwavering commitment to excellence, I immerse myself in the art of front-end development, constantly seeking ways to elevate the user experience through innovative design and seamless functionality.";

function AboutMeText() {
    return (
        <div>
            <motion.p
                variants={aboutContentContiner}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap text-light-1 pl-40 text-left font-bebas leading-[4rem] text-5xl"
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

function AnimatedSectionTitle(props: { Title: string }) {
    return (
        <motion.pre
            variants={sectionTitleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            className="text-light-1 font-bebas  text-[5.5rem] flex pl-10 overflow-y-hidden"
        >
            {props.Title.split("").map((letter, index) => (
                <motion.span variants={letterAnmi} key={index}>
                    {letter}
                </motion.span>
            ))}
        </motion.pre>
    );
}

function About() {
    return (
        <section id="About" className="w-screen dark-section py-20 bg-dark-primary selection:bg-dark-2">
            <div className="mb-40 flex flex-col mt-10">
                <AnimatedSectionTitle Title="About Me :" />
                <AboutMeText />
            </div>
            <div>
                <div className="flex justify-center w-full ">
                    <AnimatedSectionTitle Title="・Techonlgies i use・" />
                </div>
                <TechonlgiesMarquee />
            </div>
        </section>
    );
}

export default About;

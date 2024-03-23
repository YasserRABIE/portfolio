import { motion } from "framer-motion";
import {
    heroTitle,
    heroTitleContainer,
    rowsContainer,
    container,
    letterAnmi,
    wordAnmi,
} from "../components/animations";

// components
const heroTextContent = [
    "A SKILLED FRONT-END DEVELOPER HAILING FROM THE",
    "VIBRANT LANDSCAPES OF EGYPT.",
    "・ WHO IS GONNA BRING YOUR VISIONS TO LIFE ・",
];
const rows = heroTextContent.map((row) => {
    return row.split(" ");
});
function Row1() {
    return (
        <motion.span
            variants={container}
            className=" flex gap-1 items-center md:text-[0.8rem] flex-wrap sm:justify-start justify-center text-dark-2 overflow-hidden"
        >
            {rows[0].map((word, index) => (
                <motion.span variants={wordAnmi} key={index}>
                    {word + " "}
                </motion.span>
            ))}
        </motion.span>
    );
}
function Row2() {
    return (
        <motion.span
            variants={container}
            className=" flex gap-1 items-center md:text-[0.8rem]  sm:justify-start justify-center text-dark-2 overflow-hidden"
        >
            {rows[1].map((word, index) => (
                <motion.span variants={wordAnmi} key={index}>
                    {word + " "}
                </motion.span>
            ))}
        </motion.span>
    );
}
function Row3() {
    return (
        <motion.span
            variants={container}
            className=" flex gap-1 items-center md:text-[1.2rem] text-dark-1 sm:justify-start sm:hidden text-[1.6rem] font-chinese justify-center  overflow-hidden"
        >
            {rows[2].map((word, index) => (
                <motion.span variants={wordAnmi} key={index}>
                    {word + " "}
                </motion.span>
            ))}
        </motion.span>
    );
}

function HeroTextContent() {
    return (
        <motion.div variants={rowsContainer} initial="initial" animate="animate" className=" text-center">
            <Row1 />
            <Row2 />
            <Row3 />
        </motion.div>
    );
}

function HeroTextTitle() {
    return (
        <motion.div
            variants={heroTitleContainer}
            initial="initial"
            animate="animate"
            id="hero-text"
            className=" flex sm:mb-0 flex-col text-[6.4svw]  font-archivo font-bold lg:-translate-y-0 "
        >
            <motion.pre className="font-archivo overflow-hidden text-dark-1 font-bold flex" variants={heroTitle}>
                {"HI THERE, I'M".split("").map((letter, index) => (
                    <motion.span variants={letterAnmi} key={index}>
                        {letter}
                    </motion.span>
                ))}
            </motion.pre>{" "}
            <motion.pre
                variants={heroTitle}
                className=" flex text-dark-1 overflow-hidden font-archivo pl-[1em] sm:pl-0 font-bold"
            >
                {"  "}
                {"YASSER RABIE.".split("").map((letter, index) => (
                    <motion.span variants={letterAnmi} key={index}>
                        {letter}
                    </motion.span>
                ))}
            </motion.pre>
        </motion.div>
    );
}

function Hero() {
    return (
        <section className=" container flex relative items-center justify-center sm:justify-center  h-screen selection:bg-dark-2">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 3.1, type: "spring" }}
                className="hero-pattern absolute  lg:w-[60svw] sm:w-[80swv] sm:h-[80swv] lg:h-[60svw] -z-10 rounded-full overflow-hidden w-[40svw] h-[40svw] "
            ></motion.div>
            <div
                id="hero"
                className=" flex  h-full w-full flex-col items-center justify-center sm:justify-end sm:items-start"
            >
                <div className=" flex flex-col items-center sm:items-start sm:pl-5 sm:pb-10 overflow-hidden">
                    <HeroTextTitle />
                    <HeroTextContent />
                </div>
            </div>
        </section>
    );
}

export default Hero;
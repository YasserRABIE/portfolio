import { motion } from "framer-motion";
import { letterAnmi } from "../components/animations";

const sectionTitleVariants = {
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.03,
        },
    },
};

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

export default AnimatedSectionTitle;

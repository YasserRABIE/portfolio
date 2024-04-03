import { motion } from "framer-motion";

const linkWrapper = {
    animate: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.1,
        },
    },
};
const container = {
    initial: {
        scaleY: 0,
        transformOrigin: "bottom",
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
    exit: {
        height: 0,
        transition: {
            delay: 0.5,
            duration: 0.4,
            ease: "easeIn",
            satggerDirection: -1,
        },
    },
};

const letterAnmi = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            mass: 0.2,
            damping: 20,
            stiffenes: 300,
        },
    },
    exit: {
        y: "-100%",
        transition: {
            duration: 0.2,
            type: "spring",
            mass: 0.2,
            damping: 20,
            stiffenes: 300,
        },
    },
};

function PageTransition({ transitionTitle }: { transitionTitle: string }) {
    return (
        <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen fixed  top-0 left-0 h-screen  flex items-center justify-center z-50  bg-dark-1 text-white text-7xl font-bebas "
        >
            <motion.div variants={linkWrapper} className="overflow-hidden flex">
                {transitionTitle.split("").map((letter, i) => (
                    <motion.span variants={letterAnmi} key={i}>
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default PageTransition;

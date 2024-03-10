import { wordAnmi } from "./animations";
import { motion } from "framer-motion";

// variants
const loaderVariants = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};
// components
const pharseTop = ` yasser rabie `;
const pharseBottom = `・ front-end developer ・`;

function Pharse(props: { title: string }) {
    return (
        <motion.div
            className=" flex gap-2 overflow-y-hidden"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
        >
            {props.title.split(" ").map((letter, index) => (
                <motion.span variants={wordAnmi} className="uppercase text-light-1" key={index}>
                    {letter + " "}
                </motion.span>
            ))}
        </motion.div>
    );
}

function Loader() {
    return (
        <motion.div
            initial={{ height: "100svh" }}
            animate={{ height: 0 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="w-screen fixed  top-0 left-0 h-screen pointer-events-none flex items-center z-50  bg-dark-1"
        >
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2.2, duration: 1 }}
                className=" text-4xl  sm:text-[1.3rem] font-bold w-full justify-center overflow-y-hidden py-5 flex items-center gap-2"
            >
                <motion.div transition={{ staggerChildren: 2 }} className=" flex flex-col items-center sm:gap-0 gap-3 ">
                    <Pharse title={pharseTop} />
                    <Pharse title={pharseBottom} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Loader;

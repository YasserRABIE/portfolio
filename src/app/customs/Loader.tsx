import { wordAnmi } from "../animations/animations";
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
const pharseBottom = `front-end developer`;

function Pharse(props: { title: string }) {
    return (
        <motion.div
            className=" flex gap-2 overflow-y-hidden"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {props.title.split(" ").map((letter, index) => (
                <motion.span variants={wordAnmi} className="uppercase text-white" key={index}>
                    {letter + " "}
                </motion.span>
            ))}
        </motion.div>
    );
}

function Loader() {
    return (
        <motion.div
            initial={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 1.2 }}
            className="w-screen fixed  top-0 left-0 h-screen  flex items-center z-50  bg-dark-primary"
        >
            <motion.div
                exit={{ opacity: 0, transition: { duration: 1.2 } }}
                className=" text-4xl  sm:text-[1.3rem] font-bold w-full justify-center overflow-y-hidden py-5 flex items-center gap-2"
            >
                <motion.div className=" flex flex-col items-center sm:gap-0 gap-3 ">
                    <Pharse title={pharseTop} />
                    <Pharse title={pharseBottom} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Loader;

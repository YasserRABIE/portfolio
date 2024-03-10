import { motion } from "framer-motion";
import Image from "next/image";
import navIcon from "../assets/nav-icon.svg";
import { slideBottom, slideLeft, chineseTextVariants, linksVariants } from "./animations";

// components
const ChineseText = () => {
    const chineseChars = "向下滚动以探索".split("");
    return (
        <motion.h1
            className="  font-chinese flex flex-col pointer-events-none  absolute right-0 top-[250%] overflow-hidden"
            variants={chineseTextVariants}
            initial="hidden"
            animate="visible"
        >
            {chineseChars.map((char, index) => (
                <motion.span
                    className="text-[2.20rem] md:text-[1.8rem] "
                    variants={slideLeft}
                    key={index}
                    custom={index}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

const Links = () => {
    const links = ["About", "Services", "Projects", "Contact"];
    return (
        <ul id="links" className=" relative flex flex-col gap-1 font-montserrat sm:scale-75 font-bold text-[1.4rem]">
            {links.map((link, index) => (
                <motion.a href={`#${link}`} key={index} variants={linksVariants} whileHover="hover" whileTap="tap">
                    {link}
                </motion.a>
            ))}
            <ChineseText />
        </ul>
    );
};

function Header() {
    return (
        <header className=" relative ">
            <motion.nav
                variants={slideBottom}
                initial="initial"
                animate="animate"
                className="px-5 pt-10 sm:pt-5 flex w-screen z-30 absolute top-0 left-0 justify-between selection:bg-dark-2"
            >
                <div className=" flex items-start  ">
                    <h1 className=" sm:hidden">
                        <span className="font-madimi text-5xl lg:text-4xl ">{`I'M`}</span>
                        <span className=" text-dark-2  font-japanese text-7xl lg:text-6xl "> ・ ヤセル</span>
                    </h1>
                    <div className=" hidden sm:flex items-center w-16 p-2 rounded-full shadow-xl pt-5">
                        <Image src={navIcon} alt="navIcon" />
                    </div>
                </div>
                <div className="flex text-left pr-[2svw]">
                    <Links />
                </div>
            </motion.nav>
        </header>
    );
}

export default Header;

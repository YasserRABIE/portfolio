import { motion } from "framer-motion";
import Image from "next/image";
import navIcon from "../assets/images/nav-icon.svg";
import { slideBottom, slideLeft, chineseTextVariants, linksVariants } from "../animations/animations";

// components
const ChineseText = () => {
   const chineseChars = "向下滚动以探索".split("");
   return (
      <motion.h1
         className="font-chinese flex flex-col text-dark-1 pointer-events-none  absolute right-0 top-[180%] overflow-hidden"
         variants={chineseTextVariants}
         initial="hidden"
         animate="visible"
      >
         {chineseChars.map((char, index) => (
            <motion.span
               className="text-[2.20rem] md:text-[1.8rem] leading-none sm:text-[1.2rem] "
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

const Links = ({ startPageTransition }: { startPageTransition: Function }) => {
   const links = ["About", "Services", "Projects", "Contact"];

   const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
      event.preventDefault();
      startPageTransition(link);
      const href = event.currentTarget.getAttribute("href");
      setTimeout(() => {
         window.location.href = href!;
      }, 600);
   };

   return (
      <ul
         id="links"
         className=" relative flex text-dark-1 flex-col gap-1 cursor-pointer font-montserrat sm:scale-75 font-bold text-[1.4rem]"
      >
         {links.map((link, index) => (
            <motion.a
               onClick={(e) => handleLinkClick(e, link)}
               href={`#${link}`}
               key={index}
               variants={linksVariants}
               whileHover="hover"
               whileTap="tap"
            >
               {link}
            </motion.a>
         ))}
         <ChineseText />
      </ul>
   );
};

function Header({ pageTransitions }: { pageTransitions: Function }) {
   return (
      <header className=" relative ">
         <motion.nav
            variants={slideBottom}
            initial="initial"
            animate="animate"
            className="px-5 pt-10 sm:pt-5 flex w-screen z-30 absolute top-0 left-0 justify-between selection:bg-dark-2"
         >
            <div className=" flex items-start sm:pt-5 ">
               <h1 className=" sm:hidden">
                  <span className="font-madimi text-5xl text-dark-1 lg:text-4xl ">{`I'M`}</span>
                  <span className=" text-dark-2  font-japanese text-7xl lg:text-6xl"> ・ ヤセル</span>
               </h1>
               <div className="hidden sm:flex items-start text-dark-2  font-japanese text-[2rem] pointer-events-none">
                  ヤセル
               </div>
            </div>
            <div className="flex text-left pr-[2svw]">
               <Links startPageTransition={pageTransitions} />
            </div>
         </motion.nav>
      </header>
   );
}

export default Header;

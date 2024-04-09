import { motion } from "framer-motion";
import { letterAnmi } from "../animations/animations";

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
            className="text-dark-1 mt-20 font-bebas  text-[5.5rem] flex  pl-10 overflow-y-hidden"
        >
            {props.Title.split("").map((letter, index) => (
                <motion.span variants={letterAnmi} key={index}>
                    {letter}
                </motion.span>
            ))}
        </motion.pre>
    );
}

function Contact() {
    return (
        <section id="Contact" className="h-screen items-center selection:bg-dark-1">
            <h1 className="flex justify-center">
                <AnimatedSectionTitle Title="contact" />
            </h1>
            <div className="flex gap-40 mx-20">
                <div className=" flex-grow-[4] ">
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="name" className="text-dark-1">
                            Your Name:
                        </label>
                        <input
                            required
                            type="text"
                            placeholder="Sue Maxwell"
                            id="name"
                            className="bg-transparent p-3 placeholder:text-[#BDBDB1] border-2 rounded-lg border-[#BDBDB1] "
                        />
                    </div>
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="email" className="text-dark-1">
                            Your Email:
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            className="bg-transparent p-3 placeholder:text-[#BDBDB1] border-2 rounded-lg border-[#BDBDB1] "
                            placeholder="pal@koniwes.pe"
                        />
                    </div>
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="message" className="text-dark-1">
                            Your Message:
                        </label>
                        <textarea
                            required
                            rows={6}
                            
                            id="message"
                            className="bg-transparent p-3 placeholder:text-[#BDBDB1] border-2 rounded-lg border-[#BDBDB1] "
                            placeholder="Tell me what's on your mind..."
                        />
                    </div>
                </div>
                <div className="flex-grow-[3]">icons</div>
            </div>
        </section>
    );
}

export default Contact;

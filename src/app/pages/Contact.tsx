import { motion } from "framer-motion";
import { letterAnmi } from "../animations/animations";
import { FormEvent, useState } from "react";
import axios from "axios";

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const user_id = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create an object with EmailJS service ID, template ID, Public Key, and Template params
        const data = {
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: "yasser rabie",
                message: message,
            },
        };

        // Send the email using EmailJS
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section id="Contact" className="h-screen items-center selection:bg-dark-1">
            <h1 className="flex justify-center">
                <AnimatedSectionTitle Title="contact" />
            </h1>
            <div className="flex gap-40 mx-20">
                <form className=" flex-grow-[4]" onSubmit={sendEmail}>
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="name" className="text-dark-1">
                            Your Name:
                        </label>
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                            required
                            type="text"
                            placeholder="Sue Maxwell"
                            id="name"
                            name="name"
                            className="form-inputs selection:bg-light-1 text-dark-1"
                        />
                    </div>
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="email" className="text-dark-1">
                            Your Email:
                        </label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            required
                            type="email"
                            id="email"
                            name="email"
                            className="form-inputs selection:bg-light-1 text-dark-1"
                            placeholder="pal@koniwes.pe"
                        />
                    </div>
                    <div className="flex flex-col gap-5 pb-10 font-montserrat font-semibold text-2xl">
                        <label htmlFor="message" className="text-dark-1">
                            Your Message:
                        </label>
                        <textarea
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            value={message}
                            name="message"
                            required
                            rows={6}
                            id="message"
                            className="form-inputs selection:bg-light-1 text-dark-1"
                            placeholder="Tell me what's on your mind..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="group  bg-dark-primary p-5 rounded-[3.5rem] text-light-1 font-montserrat font-semibold"
                    >
                        SEND MESSAGE
                    </button>
                </form>
                <div className="flex-grow-[3]">icons</div>
            </div>
        </section>
    );
}

export default Contact;

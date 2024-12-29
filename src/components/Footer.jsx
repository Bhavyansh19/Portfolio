import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";

const socialLinks = [
    { href: "https://discord.gg/9hQWXXKCvj", icon: <FaDiscord /> },
    { href: "https://github.com/Bhavyansh19", icon: <FaGithub /> },
    { href: "www.linkedin.com/in/bhavyansh19", icon: <FaLinkedin /> },
    { href: "buymeacoffee.com/bhuvii", icon: <CiCoffeeCup /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Bhuvii 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-[#ff813b]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
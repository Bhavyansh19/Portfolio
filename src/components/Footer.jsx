import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import TextPressure from "./TextPressure";

const socialLinks = [
  { href: "https://discord.gg/9hQWXXKCvj", icon: <FaDiscord /> },
  { href: "https://github.com/Bhavyansh19", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/bhavyansh19/", icon: <FaLinkedin /> },
  { href: "https://buymeacoffee.com/Bhuvii", icon: <CiCoffeeCup /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-12 text-black relative">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Large TextPressure component with reduced letter spacing */}
        <div className="w-full flex justify-center pb-10">
          <TextPressure
            text="Bhuvii"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="black"
            strokeColor="#ff0000"
            minFontSize={64} // Larger font size
            letterSpacing="-2px" // Reducing space between letters
          />
        </div>

        {/* Bottom left and right sections */}
        <div className="absolute bottom-4 left-4">
          <p className="text-sm font-light">
            ©Bhuvii 2026. All rights reserved
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-4">
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

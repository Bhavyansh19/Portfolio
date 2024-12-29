import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-[#ff813b] py-24 text-blue-50 sm:overflow-hidden opacity-95">
                <div className="flex flex-col items-center text-center text-yellow-300">
                    <p className="mb-10 font-general text-[12px] uppercase">
                        <b>Got an Idea?</b>
                    </p>

                    {/* Title */}
                    <AnimatedTitle
                        title="Desig<b>n</b>. <br /> D<b>e</b>velop. <br /> Domin<b>a</b>te."
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !leading-[.9]"
                    />

                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-5">
                        <p className="font-zentry !text-[35rem] md:!text-[40rem] text-black !leading-[.9]">
                            2024
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 mt-10">
                        <Button
                            title="contact me"
                            containerClass="cursor-pointer"
                            onClick={() => window.location.href = 'mailto:bhavyansh.bj@gmail.com'}
                        />
                        <Button
                            title="View CV"
                            containerClass="cursor-pointer"
                            onClick={() => window.open('https://drive.google.com/file/d/1c6VZbXvTthSK9eJWDRyINoZugMgSnIVr/view', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

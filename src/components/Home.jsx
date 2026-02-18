import { useNavigate } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const frameRef = useRef(null);

  const heroVideo =
    "https://res.cloudinary.com/dyptshrbj/video/upload/v1745946674/hero-3.mp4";

  // Trapezoid Scroll Effect
  useGSAP(() => {
    gsap.set(frameRef.current, {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from(frameRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: frameRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden" id="home">
      <div
        ref={frameRef}
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75"
      >
        {/* Main Fullscreen Video */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* Top Right Creator Text */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#ff813b] opacity-90">
          Cre<b>a</b>tor
        </h1>

        {/* Overlay Content */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-[#ff813b] opacity-90">
              Bhav<b>y</b>ansh <br />J<b>a</b>in
            </h1>

            <p className="mb-5 max-w-64 font-general text-blue-100 uppercase">
              Your vision, my expertise, <br />
              let’s craft something extraordinary.
            </p>

            <Button
              id="explore-more"
              title="Explore More"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
              onClick={() => {
                const element = document.getElementById("project");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/project");
                }
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Cre<b>a</b>tor
      </h1>
    </div>
  );
};

export default Home;

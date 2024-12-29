import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setLoading(false);
        }
    }, [loadedVideos]);

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVdRef.current.play(),
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden" id='home'>
          {/*  {loading && (*/}
          {/*          <div*/}
          {/*              className={`fixed inset-0 flex items-center justify-center bg-violet-50 transition-transform duration-700 ease-in-out z-[100] */}
          {/*${loading ? 'scale-100' : 'scale-0'}`}*/}
          {/*          >*/}
          {/*              /!* https://uiverse.io/G4b413l/tidy-walrus-92 *!/*/}
          {/*              <div className="three-body">*/}
          {/*                  <div className="three-body__dot"></div>*/}
          {/*                  <div className="three-body__dot"></div>*/}
          {/*                  <div className="three-body__dot"></div>*/}
          {/*              </div>*/}
          {/*          </div>*/}
          {/*      )}*/}

            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <VideoPreview>
                            <div
                                onClick={handleMiniVdClick}
                                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                            >
                                <video
                                    ref={nextVdRef}
                                    src={getVideoSrc((currentIndex % totalVideos) + 1)}
                                    loop
                                    muted
                                    id="current-video"
                                    className="size-64 origin-center scale-150 object-cover object-center"
                                    onLoadedData={handleVideoLoad}
                                />
                            </div>
                        </VideoPreview>
                    </div>

                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#ff813b] opacity-90">
                    Cre<b>a</b>tor
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-[#ff813b] opacity-90">
                            Bhav<b>y</b>ansh <br/>
                            J<b>a</b>in
                        </h1>

                        <p className="mb-5 max-w-64 font-general text-blue-100 uppercase">
                            Your vision, my expertise, <br/>
                            let’s craft something extraordinary.
                        </p>

                        <Button
                            id="explore-more"
                            title="Explore More"
                            leftIcon={<TiLocationArrow />}
                            containerClass="bg-yellow-300 flex-center gap-1"
                            onClick={() => {
                                const element = document.getElementById('project');
                                if (element) {
                                    // Scroll if the element exists
                                    element.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    // Navigate if the element is on another route
                                    navigate('/project');
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
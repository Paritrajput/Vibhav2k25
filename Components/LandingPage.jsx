import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaStar } from "react-icons/fa";
import GradientText from "./UI/cards/GradientText";

export default function LandingPage() {
  return (
    <header className="relative mx-auto">
      <div className="grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full flex-col items-center gap-2 lg:max-w-[700px] relative content-center">
          <h2 className="text-center z-50 text-4xl sm:text-8xl font-batman mt-40 text-[#98FF98]">
            TEAM VIBHAV
          {/* <GradientText
            colors={["#00FF00"]}
            animationSpeed={10}
            showBorder={false}
            className=" w-full custom-class text-4xl font-batman sm:text-8xl mt-40 mx-auto z-50"
          >
            TEAM VIBHAV
          </GradientText> */}
          </h2>
          <div className="text-2xl font-orbitron text-[#98FF98]">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Beyond the Infinity")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("अनंत से भी आगे")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>

          <div className="flex text-2xl justify-center items-center">
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="animate-pulse text-white mx-2 mt-4" />
          </div>

          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

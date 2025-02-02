import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaStar } from "react-icons/fa";
import GradientText from "./UI/cards/GradientText";

export default function LandingPage() {
  return (
    <header className="relative mx-auto">
      <div className="grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full flex-col items-center justify-center gap-2 lg:max-w-[700px]">
          <h2 className="text-center">
          <GradientText
            colors={["#00FF00", "#8A2BE2" ,"#00FF7F","#00FFFF"]}
            animationSpeed={3}
            showBorder={false}
            className=" w-full custom-class text-4xl font-batman sm:text-8xl mt-40 mx-auto"
          >
            TEAM VIBHAV
          </GradientText>
          </h2>
          <div className="text-2xl font-[Quicksand]">
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

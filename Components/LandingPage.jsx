import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function LandingPage() {
  return (
    <header className="relative mx-auto">
      <div className="grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full max-w-[300px] flex-col place-items-center gap-2 sm:max-w-[500px] lg:max-w-[700px]">
          <h2 className="w-full text-6xl font-[Arkhip] text-center sm:text-8xl lg:text-start">
            Team Vibhav
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

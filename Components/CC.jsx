import CC1 from "../public/Assets/TeamPhotos/CC/Krishna Gambhir.webp";
import CC2 from "../public/Assets/TeamPhotos/CC/Parth Tailor.webp";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Card({ name, image }) {
  return (
    <Fade bottom distance="30px">
      <div className="flex max-w-sm flex-col gap-12 rounded-[20px] p-8 bg-gray-900 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)]">
        <div className="relative mx-auto  w-full max-w-md overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] " />
          <div className="relative w-full">
            <Image
              src={image}
              className="w-full"
              alt="Mobile wire frame"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white">{name}</h2>
        </div>
      </div>
    </Fade>
  );
}

export default function CC() {
  return (
    <div className="mx-auto">
      <div className="py-20">
        <div className="flex flex-col gap-14 text-white">
          <Fade>
            <div className="flex flex-col place-items-center gap-4 text-center">
              <h2 className="w-full max-w-6xl font-[poppins] text-4xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text  text-gray-200">
                CORE COORDINATOR
              </h2>

              <p className="w-full max-w-lg px-2 text-lg md:max-w-xl">
                Streamlining operations and maximizing efficiency.
              </p>
            </div>
          </Fade>

          <div className="flex flex-col items-center justify-center gap-24 lg:flex-row">
            <Card name="Krishna Gambhir" image={CC1} />
            <Card name="Parth Tailor" image={CC2} />
          </div>
        </div>
      </div>
    </div>
  );
}

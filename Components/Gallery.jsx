
import { Fade } from "react-awesome-reveal";
import React from "react";
import LogoWall from "./UI/Logowall";


export default function Gallery() {

  const logoImgs = [
    { imgUrl: '/Assets/Homepage/t1.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t2.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t3.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t4.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t5.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t6.webp', altText: "React Bits Logo" },
  ];


  return (
    <div className="bg-black py-20 bg-opacity-25">
      <div className="flex flex-col gap-28 overflow-hidden text-gray-200">
        <div className="mx-auto">
          <Fade>
            <div className="flex flex-col place-items-center gap-4 text-center">
              <h2 className="w-full max-w-6xl font-[poppins] text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text  text-gray-200">
                REFLECTING ON THE JOURNEY
              </h2>

              <p className="w-full max-w-lg px-2 text-lg md:max-w-xl">
                A glimpse into our team's past adventures, memories that shape
                our present.
              </p>
            </div>
          </Fade>
        </div>
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='#060606'
          bgAccentColor='#111111'
        />
      </div>
    </div>
  );
}

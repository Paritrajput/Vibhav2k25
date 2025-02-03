"use client";
import CC1 from "../public/Assets/TeamPhotos/CC/VISHESH Chaddha.jpg";
import CC2 from "../public/Assets/TeamPhotos/CC/Sahil.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

function Card({ name, image }) {
  return (
    <Fade bottom distance="30px">
      <motion.div
        className="flex max-w-sm flex-col gap-12 rounded-[20px] p-8 bg-gray-900 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)]"
      >
        <div className="relative mx-auto w-full overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-auto z-[2]" />
          <div className="relative object-cover h-96">
            <Image
              src={image}
              // height={400}
              className="w-full rounded-lg object-cover h-[400px]"
              alt="Mobile wire frame"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white text-xl font-grace ">{name}</h2>
        </div>
      </motion.div>
    </Fade>
  );
}

export default function CC() {
  const [isLaptop, setIsLaptop] = useState(null); // Initially `null` to prevent mismatches

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="mx-auto">
      <div className="py-7 sm:py-20">
        <motion.div
          className="flex flex-col gap-14 text-white"
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Fade>
            <motion.div
              className="flex flex-col place-items-center gap-4 text-center"
              initial={{ opacity: 0.2, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="w-full max-w-6xl font-batman text-4xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text  text-gray-200">
                CLUB COORDINATOR
              </h2>

              <p className="w-full max-w-lg px-2 text-lg md:max-w-xl font-grace">
                Streamlining operations and maximizing efficiency.
              </p>
            </motion.div>
          </Fade>

          {/* Wait until isLaptop is determined before applying animations */}
          {isLaptop !== null && (
            <motion.div
              className="flex flex-col items-center justify-center lg:flex-row gap-20 p-1"
              initial={isLaptop ? { opacity: 0.2, scale: .5 } : {}}
              whileInView={isLaptop ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: .4 }}
            >
              <Card name="Vishesh Chadha" image={CC1} />
              <Card name="Sahil Atri" image={CC2} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

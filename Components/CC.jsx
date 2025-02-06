"use client";
import CC1 from "../public/Assets/TeamPhotos/CC/VISHESH Chaddha.jpg";
import CC2 from "../public/Assets/TeamPhotos/CC/Sahil.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

function Card({ name, image ,github, linkdin}) {
  return (
    <Fade bottom distance="30px">
      <motion.div className="flex max-w-sm flex-col gap-12 rounded-[20px] p-5 bg-gray-600/30 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)] justify-end items-center relative">
        <div className="relative mx-auto w-full max-w-md overflow-hidden">
          <div className="relative w-full ">
            <Image
              src={image}
              className="w-full rounded-xl rounded-b-xl"
              alt="Mobile wire frame"
              loading="lazy"
            />
            {/* Gradient Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Name & Icons with Background */}
        <div className="text-center absolute bottom-4 flex flex-col-reverse bg-opacity-30 shadow-xl ">
          <div className="flex justify-center gap-5 p-2 items-center">
            <Link href={linkdin}>
            <TiSocialLinkedinCircular className="w-[2.6rem] h-[2.6rem] text-gray-300" />
            </Link>
            <Link href={github}>
            <VscGithub className="w-[1.9rem] h-[1.9rem] text-gray-300" />
            </Link>
          </div>
          <h2 className="text-white text-xl font-grace">{name}</h2>
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
              initial={isLaptop ? { opacity: 0.2, scale: 0.5 } : {}}
              whileInView={isLaptop ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={
                  isLaptop ? { opacity: 0.5, scale: 0.5 } : { scale: 0.6 }
                }
                whileInView={
                  isLaptop ? { opacity: 1, scale: 1 } : { scale: 1 }
                }
                transition={{ duration: 0.4 }}
              >
                <Card name="Vishesh Chadha" image={CC1} github="https://github.com/Vishesh0718" linkdin= "https://www.linkedin.com/in/vishesh-chadha-a9172525a"/>
              </motion.div>
              <motion.div
                initial={
                  isLaptop ? { opacity: 0.5, scale: 0.5 } : { scale: 0.6 }
                }
                whileInView={
                  isLaptop ? { opacity: 1, scale: 1 } : { scale: 1 }
                }
                transition={{ duration: 0.4 }}
              >
                <Card name="Sahil Atri" image={CC2} github="https://github.com/sahilatri-91" linkdin= "https://www.linkedin.com/in/sahil-atri-279940263"/>
              </motion.div>
            </motion.div>
          )}
        
        </motion.div>
      </div>
    </div>
  );
}

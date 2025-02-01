import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import backgroundImage from "../public/Assets/background2.png";
import backgroundImage2 from "../public/Assets/background.jpg";
import Image from "next/image";
import LandingPage from "../Components/LandingPage";
import CC from "../Components/CC";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [brightness, setBrightness] = useState(1.5); 

  useEffect(() => {
    const interval = setInterval(() => {
      setBrightness((prev) => (prev === 1.5 ? 0.5 : 1.5)); // Toggle brightness
    }, 1000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title> Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
        />
        <meta
          name="keywords"
          content="Projects , Eventsnew , Workshops , Our Team , Our Work , Alumni "
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Layout>
          <div className="absolute h-screen w-screen top-0 overflow-hidden inset-0">
            {/* <motion.img
               src="/Assets/background2.png"
              className="overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] object-cover"
              alt="Background 2"
              initial={{ filter: "brightness(50%)" }}
              animate={{ filter: `brightness(${brightness})` }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              // animate={{ filter: ["brightness(50%)", "brightness(120%)", "brightness(50%)"] }}
              // transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            /> */}
          </div>
          <div className="z-50 flex flex-col">
            <div className="bg-cover h-screen bg-center relative z-0 pt-12 pb-12  w-full  backdrop-blur-2xl wave-contrast ">
              <Image
                src={backgroundImage2}
                alt="Background "
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="fixed  "
              />
              <LandingPage />
            </div>

            <AboutUs />
            <Gallery />
            <CC />
            <FAQs />
            <Contact />
          </div>
        </Layout>
      </main>
    </>
  );
}

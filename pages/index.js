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


export default function Home() {
    const [isMoveToAbout, setIsMoveToAbout] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);


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
          <div className="bg-cover bg-center fixed z-0 h-screen w-full blur-sm">
            <Image
              src={backgroundImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              
            />
            <div className="absolute top-0 left-0 bg-gray-900 opacity-20 h-screen w-full z-10"></div>
          </div>
          <div className="z-50 flex flex-col">
            <div className="bg-cover h-screen bg-center relative z-0 pt-12 pb-12  w-full backdrop-blur-sm">
            <Image
              src={backgroundImage2}
              alt="Background"
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="fixed"
              
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

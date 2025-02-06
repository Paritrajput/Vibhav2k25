"use client"
import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";

import LandingPage from "../Components/LandingPage";
import CC from "../Components/CC";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";

import GameSection from "../Components/GameSection";

export default function Home() {
 
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
          content="Projects , Events , Workshops , Our Team , Our Work , Alumni "
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Layout>
          {/* Background */}
          <div className="absolute h-screen w-screen top-0 overflow-hidden inset-0"></div>
          <div className="z-50 flex flex-col  ">
            {/* Home Section */}
            <section
              id="home"
             
              className="bg-cover h-screen bg-center relative z-0  pb-12 w-full backdrop-blur-2xl wave-contrast "
            >
              <video
               
               src="/Assets/backgroundVd.mp4"
               alt="Background"
               autoPlay
               loop
               muted
               playsInline
               className="fixed z-[-1] landing-video"
               style={{ objectFit: "cover", width: "100vw", height: "100vh" ,zIndex:"-1"}}
             />
             
              
              <LandingPage />
            </section>
<section className="">
       
              <AboutUs />
  

            {/* Other Sections */}
            <Gallery />
            <CC />
            <GameSection/>
            <FAQs />
            <Contact />
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}

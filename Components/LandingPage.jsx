// components/AnimatedLogo.tsx
"use client"; // Required for Framer Motion in Next.js
import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaStar } from "react-icons/fa";
import GradientText from "./UI/cards/GradientText";
import FloatingGameInfo from "./UI/GameIcon"



import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// const AnimatedLogo = () => {
//   const dialControls = useAnimation();
//   const logoControls = useAnimation();
//   const particleControls = useAnimation();
//   const sparkleControls = useAnimation();

//   useEffect(() => {
//     const sequence = async () => {
//       // Rotate the dial with a glowing effect
//       await dialControls.start({
//         rotate: 360,
//         boxShadow: "0 0 20px 10px rgba(0, 255, 100, 0.8)", // Green glow
//         transition: { duration: 2, ease: "easeInOut" },
//       });

//          // Make the V-shaped logo appear with a futuristic glow
//          await logoControls.start({
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           filter: "drop-shadow(0 0 20px rgba(0, 255, 100, 0.8))", // Green glow
//           transition: { duration: .5, ease: "easeInOut" },
//         });

//       // Make the dial smaller and add a 3D perspective
//       await dialControls.start({
//         scale: 0.5,
//         rotateY: 360,
//         rotateX: 360,
//         transition: { duration: 1, ease: "easeInOut" },
//       });

   

//       // Add particle animation for a time-machine effect
//       await particleControls.start({
//         opacity: 1,
//         y: -100,
//         transition: { duration: 1, ease: "easeOut" },
//       });

//       // Add sparkle animation
//       await sparkleControls.start({
//         opacity: [0, 1, 0],
//         scale: [0.5, 1.5, 0.5],
//         transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" },
//       });
//     };

//     sequence();
//   }, [dialControls, logoControls, particleControls, sparkleControls]);

//   return (
//     <div className="flex items-center justify-center h-fit mt-24 relative overflow-hidden rounded-full">
//       {/* Glowing background effect */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-ropacity-0 blur-3xl rounded-full"
//         animate={{
//           opacity: [0, 0.5, 0],
//           scale: [1, 1.5, 2],
//           transition: { duration: 3, repeat: Infinity, repeatType: "mirror" },
//         }}
//       />

//       {/* Light streaks for a futuristic effect */}
//       <motion.div
//         className="absolute w-1 h-20 bg-green-500 blur-sm"
//         animate={{
//           rotate: [0, 45, 90, 135, 180, 200, 300, 360],
//           y: [-100, 100, -100],
//           opacity: [0, 1, 0],
//           transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//         }}
//         style={{
//           left: "20%",
//         }}
//       />
//       <motion.div
//         className="absolute w-1 h-20 bg-green-500 blur-sm"
//         animate={{
//           rotate: [0, 60,120,180, 225, 270, 315, 360],
//           y: [100, -100, 100],
//           opacity: [0, 1, 0],
//           transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
//         }}
//         style={{
//           right: "20%",
//         }}
//       />

//       {/* Dial with 3D effect */}
//       <motion.div
//         className="w-72 h-72 border-8 border-green-500 rounded-full relative flex items-center justify-center bg-transparent"
//         animate={dialControls}
//         initial={{ rotate: 0, scale: 1 }}
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: "1000px",
//         }}
//       >
//         {/* Inner ring for a futuristic look */}
//         <motion.div
//           className="absolute w-52 h-52 border-4 border-green-300 rounded-full opacity-50"
//           animate={{
//             rotate: 360,
//             transition: { duration: 4, repeat: Infinity, ease: "linear" },
//           }}
//         />

//         {/* V-Shaped Logo */}
//         <motion.div
//           className="absolute inset-0 flex items-center justify-center"
//           animate={logoControls}
//           initial={{ opacity: 0, scale: 0.5, y: 50 }}
//         >
//           <img src="/Assets/Yellow.png" className="h-32" alt="Logo" />
//         </motion.div>
//       </motion.div>

//       {/* Particle animation for time-machine effect */}
//       <motion.div
//         className="absolute w-2 h-2 bg-green-500 rounded-full"
//         animate={particleControls}
//         initial={{ opacity: 0, y: 0 }}
//         style={{
//           filter: "blur(2px)",
//         }}
//       />
//       <motion.div
//         className="absolute w-2 h-2 bg-green-500 rounded-full"
//         animate={particleControls}
//         initial={{ opacity: 0, y: 0 }}
//         style={{
//           filter: "blur(2px)",
//           left: "60%",
//           transition: { delay: 0.2, duration: 1, ease: "easeOut" },
//         }}
//       />
//       <motion.div
//         className="absolute w-2 h-2 bg-green-500 rounded-full"
//         animate={particleControls}
//         initial={{ opacity: 0, y: 0 }}
//         style={{
//           filter: "blur(2px)",
//           left: "40%",
//           transition: { delay: 0.4, duration: 1, ease: "easeOut" },
//         }}
//       />

//       {/* Sparkle animation */}
//       <motion.div
//         className="absolute w-2 h-2 bg-green-500 rounded-full"
//         animate={sparkleControls}
//         initial={{ opacity: 0, scale: 0.5 }}
//         style={{
//           top: "20%",
//           left: "30%",
//           filter: "blur(1px)",
//         }}
//       />
//       <motion.div
//         className="absolute w-2 h-2 bg-green-500 rounded-full"
//         animate={sparkleControls}
//         initial={{ opacity: 0, scale: 0.5 }}
//         style={{
//           top: "40%",
//           right: "30%",
//           filter: "blur(1px)",
//           transition: { delay: 0.5 },
//         }}
//       />
//     </div>
//   );
// };



export default function LandingPage() {
  return (
    <header className="relative mx-auto h-full mt-32">
      <div className="grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full flex-col items-center max-sm:gap-5 lg:max-w-[700px] lg:max-w-[100%] relative content-center">
        
        <h2 className="text-center z-50 text-[2.7rem] sm:text-8xl font-batman mt-0 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
  TEAM VIBHAV
</h2>

          {/* <GradientText
            colors={["#00FF00"]}
            animationSpeed={10}
            showBorder={false}
            className=" w-full custom-class text-4xl font-batman sm:text-8xl mt-40 mx-auto z-50"
          >
            TEAM VIBHAV
          </GradientText> */}
          
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

        <FloatingGameInfo/>
      
      </div>
    </header>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Popup } from "./ProjectModal";

export const SkeletonProjectCard = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[326px] h-[360px] m-[30px] overflow-hidden relative z-[1] bg-gray-700 animate-pulse rounded-lg"
    >
      {/* Background Skeleton */}
      <div className="absolute inset-0 bg-gray-600"></div>

      {/* Foreground Skeleton */}
      <div className="absolute top-0 left-0 h-full w-full object-cover bg-gray-500 opacity-70"></div>

      {/* Title Skeleton */}
      <div className="absolute w-[75%] h-full left-[12.5%] top-[40%] mt-[18%] opacity-100 flex flex-col items-center text-center">
        <div className="h-6 w-3/4 bg-gray-400 rounded-md mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-400 rounded-md"></div>

        {/* Button Skeleton */}
        <div className="h-8 w-28 mt-4 bg-gray-500 rounded-lg"></div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="relative">
      {/* Card */}

      <motion.div
        className="flex items-center justify-center w-[326px] h-[360px]  overflow-hidden relative z-[1]"
        onHoverStart={() => {
          setOnHover(true);
        }}
        onHoverEnd={() => {
          setOnHover(false);
        }}


      >
        <img
          src="/Assets/Exhi_card.4455c90a8f86a8bc8698.png"
          className="h-full w-full object-cover absolute top-0 left-0 z-[-1] "
          onClick={openPopup}
        />
        <img
          src={project.images}
          className={`brightness-[75%] h-[85%] object-cover absolute transition-[transform,filter] ease-in-out duration-500 w-[81%] z-[-2] 
            ${onHover ? "scale-105 brightness-[30%] " : ""} `}
        ></img>

        <div
          className={`flex flex-col items-center justify-center text-center w-[75%] h-full absolute left-[12.5%] top-[20%] mt-[13%] opacity-100 pointer-events-none transition-[top,opacity] duration-500 ease-in-out z-[3]  ${onHover ? "top-[0]" : ""}`}
        >
          <h2 className="text-xl font-bold  ">{project.name}</h2>
          <button className={`transition-all duration-500 ease-in-out ${onHover? "opacity-100 mt-3":"opacity-0 mt-10"} font-bold bg-green-900/70 p-2 rounded-2xl`}>Click TO View</button>
          {/* <p className="text-sm">{project.shortDescription}</p> */}
        </div>
      </motion.div>

      {/* Popup */}
      {isPopupOpen && (
        <Popup
          title={project.name}
          description={project.content}
          image={project.images}
          github={project.github || ""}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default ProjectCard;

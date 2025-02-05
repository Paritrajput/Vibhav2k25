import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export function Popup({ title, description, image, onClose, github }) {
  return (
    <div className="fixed top-0 pt-10 inset-0 z-50 flex items-center justify-center bg-black backdrop-opacity-100 bg-opacity-60  rounded-2xl">
      <div className="h-fit max-h-3/5 p-1 sm:w-3/4 w-[95%] fixed rounded-2xl bg-gray-900/90">
        <button
          className="absolute top-5 right-5 text-gray-200 hover:text-white transition-all duration-300 ease-in-out hover:scale-125 hover:bg-black rounded-full px-1"
          onClick={onClose}
        >
          ✕
        </button>
        <motion.div className=" flex flex-col justify-center items-center text-center p-1 sm:p-8 max-sm:mt-5 text-white ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-3xl text-2xl font-bold my-3 mt-0 text-center w-fit"
          >
            <div>
            {title}
            </div>
          </motion.div>
          <motion.div className="text-gray-200 text-lg w-[95%] sm:w-[88%] max-h-[490px] text-justify font-grace  overflow-y-auto ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 text-justify"
            >
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
        <Link href={github} className=" flex justify-center">
             <FaGithub className="w-[1.6rem] h-[1.6rem]"/>
        </Link>
      </div>
    </div>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

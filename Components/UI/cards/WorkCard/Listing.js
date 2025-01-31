import React from "react";
import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";
import Image from "next/image";

const Listing = ({ data, open }) => {
  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="image"
            src={data.images}
            loading="lazy"
          />
          <div className="absolute top-2 right-2 m-2">
            <FaExpand className="text-white text-2xl transform hover:scale-150 duration-300" />
          </div>
        </div>

        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price font-mono">{data.name}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address font-sans">{data.content}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;

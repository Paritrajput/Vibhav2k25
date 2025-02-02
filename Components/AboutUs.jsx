import React from "react";
import PixelCard from "./UI/PixelCard";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      className="mt-36"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <PixelCard />
    </motion.div>
  );
}

export default AboutUs;

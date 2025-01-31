import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({data , close }) => {
const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price ">{data.name}</span>
        </motion.div>
        <motion.div
          className="modal__description-wrapper p-4"
          variants={modalRowVariants}
        >
          <h3 className="text-2xl font-[font-mono]">{data.round1head}</h3>
          <p className="font-sans algin-justify">{data.round1}</p>
          <br />
          <h3 className="text-2xl font-[font-mono]">{data.round2head}</h3>
          <p className="font-sans algin-justify">{data.round2}</p>
          <br />
          <h3 className="text-2xl font-[font-mono]">{data.round3head}</h3>
          <p className="font-sans algin-justify">{data.round3}</p>
          <br />
          <h3 className="text-2xl font-[font-mono]">{data.round4head}</h3>
          <p className="font-sans algin-justify">{data.round4}</p>
          
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

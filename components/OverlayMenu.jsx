import React from 'react';
import { motion } from 'framer-motion';

const OverlayMenu = ({ onClose }) => {
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="overlay-menu"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
    >
      <motion.div className="overlay-content">
        <button className="close-button" onClick={onClose}>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
        </button>
        <motion.ul className="menu-links text-7xl">
          <motion.li variants={linkVariants}>
            <a href="/">Home</a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <a href="/about">About</a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <a href="/contact">Contact</a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default OverlayMenu;

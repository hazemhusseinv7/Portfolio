import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Hazem</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Front End Developer</p>
            <p className="p-text">Graphic Designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="Profile" className="profile" />

        <motion.img
          className="overlay_profile_background"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.profile_background}
          alt="Profile Background"
        />

        <motion.img
          className="overlay_profile_layout"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.profile_layout}
          alt="Profile Layout"
        />
      </motion.div>

      <motion.div
        className="app__header-skills"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[
          images.html,
          images.css,
          images.js,
          images.react,
          images.typescript,
        ].map((skill, index) => (
          <div className="skill-cmp app__flex" key={`skill-${index}`}>
            <img src={skill} alt="Skill" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

import React from "react";
import { BsLinkedin, BsBehance, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/hazemhusseinv7"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a>
        <BsBehance />
      </a>

      <a>
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;

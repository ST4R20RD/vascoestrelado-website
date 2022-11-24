import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

function SocialLinks() {
  return (
    <div>
      <a
        target="_blank"
        href="https://www.facebook.com/vascoestrelado.photographer"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/vasco_estrelado_photographer/"
        rel="noreferrer"
      >
        <RiInstagramFill />
      </a>
      <a target="_blank" href="https://www.youtube.com/@VascoEstrelado" rel="noreferrer">
        <BsYoutube />
      </a>
    </div>
  );
}

export default SocialLinks;

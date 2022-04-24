import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sk8013445@gmail.com</span>
        <div className="i-icons">
        <a href="https://github.com/suryanarayan09"><Insta color="white" size={"5rem"} /></a>
          <a href="https://www.linkedin.com/in/suraj-kumar-8013445"><Facebook color="white" size={"5rem"} /></a>
          <a href="https://www.instagram.com/invites/contact/?i=zdbeuvgm6cak&utm_content=3027zw9"><Gitub color="white" size={"5rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

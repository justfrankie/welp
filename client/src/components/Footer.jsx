import React from "react";
import moment from "moment";

const Footer = () => (
  <span>
    <a target="_blank" href="https://www.frankiehliu.com/" id="redirectText">
      Frankie Liu
    </a>
    <p>{`last modified: ${moment().format("MMM Do YY")}`}</p>
  </span>
);

export default Footer;

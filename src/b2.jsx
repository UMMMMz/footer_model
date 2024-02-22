'use client'
import React, { useEffect, useRef } from "react"; // Importing useEffect from React
import gsap from "gsap";

function Icon2() {
  useEffect(() => {
    gsap.to("#haider2", {
      x: 200,
      repeat: -1, // Repeat once (move to x: 400 and then back)
      yoyo: true, // Yoyo back to initial position
      // fill: "red",
      
      duration: 6, // Animation duration in seconds
      ease: "power1.inOut"
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1728"
      height="251"
      fill="#2D3C65"
      id="haider2"

      viewBox="0 0 1728 251"
    >
      <path
        fill="navyblue"
        fillRule="evenodd"
        d="M0 50.2v50.2h288v100.4h576V0h288v100.4h288v25.1h288V251H0V50.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon2;

'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Icon3() {
  

  const svgRef = useRef(null) 

 
    useEffect(() => {
      gsap.to("#haider3", {
        x: -100,
        repeat: -1, // Repeat once (move to x: 400 and then back)
        yoyo: true, // Yoyo back to initial position
        
        duration: 4, // Animation duration in seconds
        ease: "power1.inOut"
      });
    }, []);
  useEffect(() => {
    // Zoom effect using GSAP
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
  
    tl.to(
      svgRef.current,
      { scale: 1.5, duration: 6, ease: "power1.inOut" , yoyo: true, } // Zoom to 1.2x scale over 5 seconds
    ).to(
      svgRef.current,
      { scale:1, duration: 6, ease: "power1.inOut" ,  yoyo: true, } // Zoom back to original scale over 5 seconds
    );
  }, []);
  return (
    <svg
    id="haider3"
    ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1420"
      height="311"
      fill="#none"
      viewBox="0 0 1420 311"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M0 241.592V138.148h432v103.444h432V103.444h432V0h432v311H0v-69.408z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_376_123"
          x1="864"
          x2="864"
          y1="0"
          y2="311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E39D77"></stop>
          <stop offset="1" stopColor="#D6682C"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon3;
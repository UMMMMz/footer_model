"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Icon1() {
  const svgRef = useRef(null) 

  useEffect(() => {
    gsap.to("#haider1", {
      x: 100,
      repeat: -1, // Repeat once (move to x: 400 and then back)
      yoyo: true, // Yoyo back to initial position
      // fill: "red",
      
      duration: 7, // Animation duration in seconds
      ease: "power1.inOut"
    });
  }, []);
  useEffect(() => {
    // Zoom effect using GSAP
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
  
    tl.to(
      svgRef.current,
      { scale:2, duration: 6, ease: "power2.inOut" , yoyo: true, } // Zoom to 1.2x scale over 5 seconds
    ).to(
      svgRef.current,
      { scale: 1, duration: 6, ease: "power2.inOut"  , yoyo: true, } // Zoom back to original scale over 5 seconds
    );
  }, []);
  return (
    <svg
     ref= {svgRef}
       id = 'haider1'
      xmlns="http://www.w3.org/2000/svg"
      width="1370"
      height="279"
      fill="none"
      viewBox="0 0 1370 279"
     
    >
      <path
        fill="#4A5568"
        fillRule="evenodd"
        d="M1370 216.734v-92.801H938v92.801H506V92.8H74V0h-432v279h1728v-62.266z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon1;
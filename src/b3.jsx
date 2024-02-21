'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Icon3() {
  const svgRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Loop indefinitely
    // GSAP animation to move the SVG towards the left smoothly
    tl.to(svgRef.current, {
      x: -100, // Move 100 units towards the left
      duration: 4, // Animation duration in seconds
      ease: "power2.inOut", // Easing function for smooth motion
    });
    tl.from(svgRef.current ,{
      x: 0 ,
    })
     // Change the SVG's fill color to pink
     gsap.to(svgRef.current, {
      fill: "#4A5568", // gray dark color
      duration: 2, // Animation duration in seconds
      delay: 2 // Delay the color change animation by 2 seconds
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  useEffect(() => {
    // Zoom effect using GSAP
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
  
    tl.to(
      svgRef.current,
      { scale: 1.5, duration: 6, ease: "power2.inOut" , yoyo: true, } // Zoom to 1.2x scale over 5 seconds
    ).to(
      svgRef.current,
      { scale:1, duration: 6, ease: "power1.inOut" ,  yoyo: true, } // Zoom back to original scale over 5 seconds
    );
  }, []);
  return (
    <svg
    ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1420"
      height="311"
      fill="#none"
      viewBox="0 0 1420 311"
    >
      <path
        fill="#FFFFFF"
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
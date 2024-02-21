"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Icon1() {
  const svgRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Loop indefinitely
    // GSAP animation to move the SVG towards the left smoothly
    tl.to(svgRef.current, {
      x: 100, // Move 100 units towards the left
      duration: 6, // Animation duration in seconds
      ease: "power2.inOut", // Easing function for smooth motion
   yoyo:true ,
    });
    tl.from(svgRef.current ,{
      x: 0 ,
      duration:6 ,
      yoyo: true
    })
     // Change the SVG's fill color to pink
     gsap.to(svgRef.current, {
      fill: "#4A5568", // Pink color
      duration: 2, // Animation duration in seconds
      delay: 2 // Delay the color change animation by 2 seconds
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

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
    ref={svgRef}
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
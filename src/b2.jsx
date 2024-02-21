'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
function Icon2() {
  const svgRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1}); // Loop indefinitely
    // GSAP animation to move the SVG towards the left smoothly
    tl.to(svgRef.current, {
      x: 200, // Move 100 units towards the left
      duration: 6, // Animation duration in seconds
      ease: "power1.inOut", 
    
      // Easing function for smooth motion
    });
  

    // Change the SVG's fill color to pink
    gsap.to(svgRef.current, {
      fill: "#2D3C659", // Pink color
      duration: 3, // Animation duration in seconds
      delay: 2 // Delay the color change animation by 2 seconds
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <svg
    ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1728"
      height="251"
      fill="#2D3C65"
      viewBox="0 0 1728 251"
    >
      <path
        fill="#2D3C65"
        fillRule="evenodd"
        d="M0 50.2v50.2h288v100.4h576V0h288v100.4h288v25.1h288V251H0V50.2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon2;
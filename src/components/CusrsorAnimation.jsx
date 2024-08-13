
'use client'
import { useEffect, useState, useLayoutEffect } from "react";
import AnimatedCursor from "react-animated-cursor"


export default function CusrsorAnimation()  {



  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // Access the window object in the useEffect hook
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //console.log(windowWidth)


  return (
    <>
   { windowWidth > 575 ? <AnimatedCursor
    innerSize={10}
    outerSize={10}
    color='47, 164, 216'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.cursor-pointer'
    ]}
  /> 
  : null }
  </>
  ) 
}

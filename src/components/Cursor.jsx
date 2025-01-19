import gsap from "gsap";
import React, { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const handeMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log(`clientX ${clientX , clientY}`);
      
      gsap.to("#cursor", {
        x: clientX - 20/2,
        y: clientY - 20/2,
      });
    };
    window.addEventListener("mousemove", handeMouseMove);
    return () => {
      window.removeEventListener("mousemove", handeMouseMove);
    };
  }, []);
  return (
    <div id="cursor" className="w-[20px] h-[20px] bg-white rounded-full absolute top-0 left-0"></div>
  );
}

export default Cursor;

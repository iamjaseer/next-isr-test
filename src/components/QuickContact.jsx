'use client'
import { useModalContext } from "@/context/modalContext";
import { useState } from "react";

export default function QuickContact({ data }) {
  const { setModalFor, setShowModal } = useModalContext();

  const [rectPosY1, setRectPosY1] = useState(0);
  const [rectPosX1, setRectPosX1] = useState(0);
  const [rectPosY2, setRectPosY2] = useState(0);
  const [rectPosX2, setRectPosX2] = useState(0);

  function handleMouseMove(e) {
    const { pageX, pageY } = e;

    // Calculate for the first div
    ///setRectPosY1(pageY / 20);
    setRectPosX1(-pageX / 30);

    // Calculate for the second div with opposite direction
    //setRectPosY2(-pageY / 20); // Opposite direction
    setRectPosX2(pageX / 30); // Opposite direction
  }

  const openCallBackModal = () => {
    setShowModal(true);
    setModalFor('callback');
  };

  return (
    <>
      <div className="quick-contact--">
        <div className="area " onMouseMove={handleMouseMove}>
          <div
            className="move-rect"
            style={{ top: `${rectPosY1}px`, left: `${rectPosX1}px` }}
          >
            <div data-aos="fade-up" className="inner">
              <div onClick={openCallBackModal} className="wrpr quick-enquiry bg-gradient">{data[0] && data[0]}</div>
            </div>
          </div>
        </div>

        <div className="area" onMouseMove={handleMouseMove}>
          <div
            className="move-rect"
            style={{ top: `${rectPosY2}px`, left: `${rectPosX2}px` }}
          >
            <div data-aos="fade-up" className="inner-2">
              <div onClick={openCallBackModal} className="wrpr-2 quick-enquiry bg-gradient">{data[1] && data[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

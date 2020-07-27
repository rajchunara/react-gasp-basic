import React, { useRef, useEffect, useState } from 'react';
import { TweenLite, Power3 } from 'gsap';

export default function SecondGasp() {
  //Create references for amination
  let yellowCircle = useRef(null);
  let redCircle = useRef(null);
  let blueCircle = useRef(null);

  const [redCircleSize, setredCircleSize] = useState(false);

  //Add animation after component has mounted(componentDidMount)
  useEffect(() => {
    // TweenLite.from(yellowCircle, 0.8, {
    //   opacity: 0,
    //   x: 150,
    //   ease: Power3.easeInOut,
    // });
    // TweenLite.from(redCircle, 0.8, {
    //   opacity: 0,
    //   x: 150,
    //   ease: Power3.easeInOut,
    //   delay: 0.2,
    // });
    // TweenLite.from(blueCircle, 0.8, {
    //   opacity: 0,
    //   x: 150,
    //   ease: Power3.easeInOut,
    //   delay: 0.4,
    // });

    //Better way to achive staggered animation
    TweenLite.staggerFrom(
      [yellowCircle, redCircle, blueCircle], //all refs to stagger in sequence
      0.8, //delay
      {
        //Animation
        opacity: 0,
        x: 150,
        ease: Power3.easeInOut,
      },
      0.2 //animation gap
    );
  }, []);

  const handleExpand = () => {
    TweenLite.to(redCircle, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeInOut,
    });
    setredCircleSize(true);
  };

  const handleShrink = () => {
    TweenLite.to(redCircle, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeInOut,
    });
    setredCircleSize(false);
  };

  return (
    <div>
      <div className="circle-container">
        <div ref={(el) => (yellowCircle = el)} className="circle"></div>
        <div
          ref={(el) => (redCircle = el)}
          onClick={redCircleSize ? handleShrink : handleExpand}
          className="circle red"
        ></div>
        <div ref={(el) => (blueCircle = el)} className="circle blue"></div>
      </div>
    </div>
  );
}

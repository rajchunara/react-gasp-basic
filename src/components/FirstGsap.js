import React, { useRef, useEffect } from 'react';
import { TweenMax, Bounce } from 'gsap';

export default function FirstGsap() {
  let heroRef = useRef(null);

  useEffect(() => {
    TweenMax.from(heroRef, 3, {
      opacity: 0,
      x: -800,
      ease: Bounce.easeOut,
    });
  }, [heroRef]);

  return (
    <div>
      <div
        ref={(el) => {
          heroRef = el;
        }}
        className="hero"
      ></div>
    </div>
  );
}

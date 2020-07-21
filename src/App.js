import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, Bounce } from 'gsap';

import './App.css';

function App() {
  let heroRef = useRef(null);

  useEffect(() => {
    console.log(heroRef);

    TweenMax.from(heroRef, 3, {
      opacity: 0,
      x: -800,
      ease: Bounce.easeOut,
    });
  }, [heroRef]);

  return (
    <div className="App">
      <div
        ref={(el) => {
          heroRef = el;
        }}
        className="hero"
      ></div>
    </div>
  );
}

export default App;

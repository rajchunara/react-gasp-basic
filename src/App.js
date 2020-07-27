import React, { useRef, useEffect } from 'react';
import { TweenLite } from 'gsap';

import './App.css';
import FirstGsap from './components/FirstGsap';
import SecondGasp from './components/SecondGasp';

function App() {
  let appRef = useRef(null);

  useEffect(() => {
    TweenLite.to(appRef, 0, { css: { visibility: 'visible' } });
  }, []);

  return (
    <div ref={(el) => (appRef = el)} className="App">
      <SecondGasp />
    </div>
  );
}

export default App;

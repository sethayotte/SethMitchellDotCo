import React from "react";

import SMLogo from "../assets/SMdC.svg";

const Splash = () => {
  return (
    <div>
      <div id="fauxMenu">
        <h3>
          sethmitchell<span id="splashDotSpan">dot</span>co
        </h3>
      </div>
      <div id="splashContainer">
        <img src={SMLogo} id="smSplashLogo" />
        <h1 id="splashTitle">Check Back Soon For Updates</h1>
      </div>
    </div>
  );
};

export default Splash;

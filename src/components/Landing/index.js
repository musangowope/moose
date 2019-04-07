import React, { useState } from "react";
import { MooseAtWork } from "./image-constants";
import { useInterval } from "../../functions/useInterval.func";

const Landing = () => {
  const [landingState, setLandingState] = useState({
    webDisplayIndex: 0
  });

  const { webDisplayIndex } = landingState;

  useInterval(() => {
    setWebIndex();
  }, 3000);

  const setWebIndex = () => {
    const { webDisplayIndex: newWebIndex } = landingState;
    if (newWebIndex >= 2) {
      setLandingState({
        ...landingState,
        webDisplayIndex: 0
      });
    } else {
      setLandingState({
        ...landingState,
        webDisplayIndex: newWebIndex + 1
      });
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <div className="landing-page__content__thinking-bubble">
          <div className="landing-page__content__thinking-bubble__text">
            {webDisplayIndex === 0 && (
              <div className="animated fadeIn">HTML</div>
            )}
            {webDisplayIndex === 1 && (
              <div className="animated fadeIn">CSS</div>
            )}
            {webDisplayIndex === 2 && (
              <div className="animated fadeIn">Javascript</div>
            )}
          </div>
        </div>
        <img
          src={MooseAtWork}
          className="landing-page__content__working-image"
          alt="musango wope portfolio"
        />
      </div>
    </div>
  );
};

export default Landing;

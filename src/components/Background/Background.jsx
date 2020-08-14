import React, { useEffect, useRef } from "react";
import stl from "./Background.module.scss";
import caffeine from "assets/images/caffeine_structure.svg";
import meth from "assets/images/methamphetamine_structure.svg";
import lsd from "assets/images/lsd_structure.svg";
import { SmokeEffect } from "utils";

const Background = () => {
  const smokeHolder = useRef(null);

  useEffect(() => {
    SmokeEffect.init(smokeHolder.current);
    SmokeEffect.animate();
  }, []);

  return (
    <section className={stl.structures} ref={smokeHolder}>
      <img className={stl.caffeine} alt="Caffeine chemical structure" src={caffeine}></img>
      <img className={stl.meth} alt="Mephentermine chemical structure" src={meth}></img>
      <img className={stl.lcd} alt="LCD chemical structure" src={lsd}></img>
    </section>
  );
};

export default Background;

import React, { useState, useEffect } from "react";
import "../styles/style.css";
import image4 from '../image/image4.jpg';
import image5 from "../image/image5.jpg";
import image6 from "../image/image6.jpg";

const About = () => {
  return (
    <section className="about-wrapper">
      <h2>About</h2>
      <div className="borderline"></div>
      <div className="about-infomation">
        <h3>
          「誰でも光が当たるタイミングは必ずある、それはふとしたタイミングなのかもしれない」
        </h3>
        <p>化学繊維は使用せず、ベーシックでありながらも個性を大切にし、</p>
        <p>着ているだけで心に光が当たるような上質なアイテムをコンセプトに</p>
        <p>流行に捉われないデザインを提案します。</p>
      </div>
      <section className="main-images">
        <img src={image6} alt="image6" className="main-image" />
        <img src={image4} alt="image4" className="main-image" />
        <img src={image5} alt="image5" className="main-image" />
      </section>
      <div className="next-view">
        <a href="/about">もっと見る</a>
      </div>
    </section>
  );
};

export default About;
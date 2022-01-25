import React, { useState, useEffect } from "react";
import "../styles/style.css";

const About = () => {
  return (
    <section className="about-wrapper">
      <h2>About</h2>
      <div className="borderline"></div>
      <div className="about-infomation">
        <h3>「誰でも光が当たるタイミングは必ずある、それはふとしたタイミングなのかもしれない」</h3>
        <p>化学繊維は使用せず、ベーシックでありながらも個性を大切にし、</p>
        <p>着ているだけで心に光が当たるような上質なアイテムをコンセプトに</p>
        <p>流行に捉われないデザインを提案します。</p>
      </div>
      <section className="main-images">
        {/* <img src="image/image6.jpg" alt="image6" className="main-image">
        <img src="image/image4.jpg" alt="image4" className="main-image">
        <img src="image/image5.jpg" alt="image5" className="main-image"> */}
      </section>
      <div className="next-view">
        <a href="about.html">もっと見る</a>
      </div>
    </section>
  );
};

export default About;
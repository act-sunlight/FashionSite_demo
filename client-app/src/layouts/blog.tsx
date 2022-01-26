import React, { useState, useEffect } from "react";
import '../styles/style.css';
import image7 from '../image/image7.jpg'
import image8 from "../image/IC.jpg";

const About = () => {
  return (
    <section className="blog-wrapper">
      <h2>Blog</h2>
      <div className="borderline"></div>
      <section className="blog-images">
        <section className="blogeria">
          <img src={image7} alt="image7" className="blog-image" />
          <h3>新年のご挨拶</h3>
        </section>
        <section className="blogeria">
          <img src={image8} alt="image2" className="blog-image" />
          <h3>2002SS Collection</h3>
        </section>
      </section>
      <div className="next-view">
        <a href="/blog">もっと見る</a>
      </div>
    </section>
  );
};

export default About;
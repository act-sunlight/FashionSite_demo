import React, { useState, useEffect } from "react";
import "../styles/style.css";

const About = () => {
  return (
    <section className="blog-wrapper">
      <h2>Blog</h2>
      <div className="borderline"></div>
      <section className="blog-images">
        <section className="blogeria">
          {/* <img src="image/image7.jpg" alt="image7" className="blog-image"> */}
          <h3>新年のご挨拶</h3>
        </section>
        <section className="blogeria">
          {/* <img src="image/IC.jpg" alt="image2" className="blog-image"> */}
          <h3>2002SS Collection</h3>
        </section>
      </section>
      <div className="next-view">
        <a href="blog.html">もっと見る</a>
      </div>
    </section>
  );
};

export default About;
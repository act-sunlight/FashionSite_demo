import React, { useState, useEffect } from "react";
import "../styles/style.css";

const Collection = () => {
  return (
    <section className="collection-wrapper">
      <h2>Collection</h2>
      <div className="borderline"></div>
      <h2>2022SS NewWorld</h2>
      <section className="collection-images">
        {/* <img src="image/image1.jpg" alt="image1" className="collection-image">
        <img src="image/image2.jpg" alt="image2" className="collection-image">
        <img src="image/image3.jpg" alt="image3" className="collection-image">
        <img src="image/image8.jpg" alt="image8" className="collection-image">
        <img src="image/image1.jpg" alt="image1" className="collection-image">
        <img src="image/image2.jpg" alt="image2" className="collection-image">
        <img src="image/image3.jpg" alt="image3" className="collection-image">
        <img src="image/image8.jpg" alt="image8" className="collection-image"> */}
      </section>
      <div className="next-view">
        <a href="collection.html">もっと見る</a>
      </div>
    </section>
  );
};

export default Collection;
import React, { useState, useEffect } from "react";
import '../styles/style.css';
import { Gallery } from '../components'

const Collection = () => {
  return (
    <section className="collection-wrapper">
      <h2>Collection</h2>
      <div className="borderline"></div>
      <h2>2022SS NewWorld</h2>
      <section className="collection-images">
        <Gallery />
      </section>
      <div className="next-view">
        <a href="collection.html">もっと見る</a>
      </div>
    </section>
  );
};

export default Collection;
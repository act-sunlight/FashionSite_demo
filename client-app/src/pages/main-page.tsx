import React from "react";
import { Header, About, Fotter, Collection, Blog} from "../layouts";

function main() {
  return (
    <div className="Main">
      <Header />
      <About />
      <Collection />
      <Blog />
      <Fotter />
    </div>
  );
}

export default main;
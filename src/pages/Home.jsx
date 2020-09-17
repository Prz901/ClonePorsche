import React from "react";

// import image from "../utils/imageBackground/lion.jpg";

import Hero from "../components/Hero/Hero";
import Tools from "../components/Tools/Tools";
import Models from "../components/Modelos/Models";

// import Content from '../components/Content/Content'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Models />
      </div>
      <div>
        <Tools />
      </div>
    </>
  );
}

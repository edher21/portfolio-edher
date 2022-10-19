import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    desc: "Project 1",
    route: "https://www.youtube.com/channel/UCZXTLimJvnbgn1Eu8Vu7wmA",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
    route: "https://www.youtube.com/channel/UCZXTLimJvnbgn1Eu8Vu7wmA",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
    route: "https://www.youtube.com/channel/UCZXTLimJvnbgn1Eu8Vu7wmA",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.route} target="_blank" rel="noopener noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;

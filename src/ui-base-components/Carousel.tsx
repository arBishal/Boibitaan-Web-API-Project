import { Carousel as AntdCarousel } from "antd";
import React from "react";
import Image from "next/image";

import c1 from "../../public/carousel/c1.png";
import c2 from "../../public/carousel/c2.png";
import c3 from "../../public/carousel/c3.png";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousel = () => (
  <AntdCarousel autoplay>
    <Image
      src={c1}
      alt="c1"
    />
    <Image
      src={c2}
      alt="c2"
    />
    <Image
      src={c3}
      alt="c3"
    />
  </AntdCarousel>
);

export default Carousel;

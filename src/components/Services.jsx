import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <>
      <div className="services">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img src={img1} alt="" />
            <p className="legend">Messi is the best footballer</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className="legend">Ronaldo is not as good as half of him</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;

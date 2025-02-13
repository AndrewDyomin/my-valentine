import { Image } from "./image/Image";
import { useState } from "react";
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import { HeartRain } from "./rain/HeartRain";

const images = [null, img1, img2, img3, img4, img5];

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const touch = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, images.length - 1));
  };

  return (
    <div
      onClick={touch}
      style={{ background: "black", width: "100vw", height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <HeartRain />
      <Image src={images[currentSlide]} currentSlide={currentSlide} />
    </div>
  );
};
import { useState } from "react";
import "../components/carrusel.css";

const imagenes = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function ImagesCarrusel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === imagenes.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? imagenes.length - 1 : current - 1);
  };

  return (
    <div className="container">
      <div className="left-row row" onClick={prevSlide}>
        ⬅
      </div>
      <div className="right-row row" onClick={nextSlide}>
        ⮕
      </div>
      {imagenes.map(
        (image, i) =>
          current === i && (
            <div key={image} className="slide">
              <img src={image} className="imagen" alt="images" />
            </div>
          )
      )}
    </div>
  );
}

export default ImagesCarrusel;

import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/bgfactoryimg.jpg",
    "/images/C.jpg",
    "/images/B.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop={true}
      autoplay={true}
      autoplayDelay={3000}
      activeIndex={activeIndex}
      onChangeActiveIndex={(index) => setActiveIndex(index)}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className="h-full w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
}

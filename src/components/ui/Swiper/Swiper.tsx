"use client";

import React from "react";
import { FunctionComponent, ReactNode, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { cn } from "../../../../lib/utils";

interface SwiperProps {
  className?: string;
  children: ReactNode;
}

const Swiper: FunctionComponent<SwiperProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <div
        className={cn("flex h-full transition-transform duration-500")}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 p-2 z-10"
      >
        <BiLeftArrow size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 p-2"
      >
        <BiRightArrow size={20} />
      </button>
    </div>
  );
};

export default Swiper;

import React, { useState } from "react";
import SlidesSlider from "./SlidesSlider";
import ImagesSlider from "./ImagesSlider";

function Layout() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
    { title: "Slide 1", content: "Content 1" },
    { title: "Slide 2", content: "Content 2" },
    { title: "Slide 3", content: "Content 3" },
  ];

  const handlePrev = () => {
    setSliderIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setSliderIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
  };

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <SlidesSlider />
        <ImagesSlider />
      </div>
    </>
  );
}

export default Layout;

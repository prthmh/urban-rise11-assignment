import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImg = currentIndex === 0;
    const previousSlide = isFirstImg ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(previousSlide);
  };

  const gotToNext = () => {
    const isLastImg = currentIndex === slides.length - 1;
    const nextSlide = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(nextSlide);
  };

  //   setInterval(gotToNext, 5000);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" size-full relative md:mt-10">
      <div
        onClick={goToPrevious}
        className=" bg-white rounded-full absolute top-1/2 translate-x-0 translate-y-[-50%] left-4 p-1 md:p-2 border border-neutral-200 cursor-pointer"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={gotToNext}
        className=" bg-white rounded-full absolute top-1/2 translate-x-0 translate-y-[-50%] right-4 p-1 md:p-2 border border-neutral-200 cursor-pointer"
      >
        <FaChevronRight />
      </div>
      <img
        src={slides[currentIndex].img}
        alt={slides[currentIndex].title}
        className=" size-full md:rounded-lg object-fill transition duration-150 ease-out"
      />

      <div className=" absolute bottom-4 right-1/2 flex gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={twMerge(
              " bg-white rounded-full size-3 border border-neutral-400 cursor-pointer opacity-60",
              index === currentIndex && " bg-slate-800 opacity-100"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import { useEffect, useState } from "react";

import { ITestimonial, testimonials } from "../../data/testimonials";

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleAvatarClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="w-full">
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center flex flex-col justify-between items-center gap-8">
            <p className="text-xl font-medium text-base-1000">
              "{testimonials[activeIndex].quote}"
            </p>
            <p className="font-bold text-base-1000">
              {testimonials[activeIndex].name}
              {", "}
              <span className="text-base-600 font-normal">
                {testimonials[activeIndex].role}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        {testimonials.map((testimonial: ITestimonial, index: number) => (
          <button
            key={testimonial.id}
            onClick={() => handleAvatarClick(index)}
            className={`relative rounded-full transition-all duration-300 cursor-pointer`}
          >
            <div
              className={`w-12 h-12 rounded-full overflow-hidden  ${
                index === activeIndex
                  ? "ring-2 ring-offset-2 ring-secondary-500"
                  : ""
              }`}
              style={{ backgroundColor: testimonial.bgColor }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name} avatar`}
                className="w-full h-full object-cover"
              />
            </div>
            {index === activeIndex && (
              <div className="absolute -inset-1 rounded-full border-2 border-secondary-500"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

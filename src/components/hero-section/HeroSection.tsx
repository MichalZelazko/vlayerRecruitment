import PropertyCard from "../highlights-section/PropertyCard";
import { properties } from "../../data/properties";
import HeroStatistic from "./HeroStatistic";

export default function HeroSection() {
  const propertyToDisplay = properties[properties.length - 1];

  return (
    <section className="w-full min-h-[650px] grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
      <div className="hero-text flex flex-col gap-8 md:gap-14 lg:gap-20 px-8 py-8 md:px-16">
        <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-4xl md:text-5xl lg:text-6xl leading-[110%] font-bold text-base-1000"
          >
            Buy, rent, or sell <br className="hidden xl:block" />
            your property <br className="hidden xl:block" />
            easily
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-xl font-medium text-base-1000"
          >
            A great platform to buy, sell, or even rent{" "}
            <br className="hidden md:block" />
            your properties without any commisions.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start flex-wrap gap-8">
          <HeroStatistic value="50k+" title="renters" />
          <HeroStatistic value="10k+" title="properties" />
        </div>
      </div>
      <div className="hero-images h-full min-h-[400px] w-full flex items-center px-8 md:px-16 lg:px-0">
        <PropertyCard
          property={propertyToDisplay}
          className="shadow-md !h-fit lg:-translate-x-12"
        />
      </div>
    </section>
  );
}

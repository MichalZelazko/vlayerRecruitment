import SectionHeading from "../common/SectionHeading";
import PropertiesTabs from "./PropertiesTabs";
import { properties } from "../../data/properties";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function HighlightsSection() {
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    properties[0].type
  );
  const propertyTypes = [...new Set(properties.map((p) => p.type))];

  const filteredProperties = properties.filter(
    (property) => property.type === selectedPropertyType
  );

  return (
    <section className="w-full py-8 grid place-items-center bg-base-0">
      <div className="max-w-[1120px] flex flex-col items-center gap-y-11 px-8 md:px-0 text-center">
        <PropertiesTabs
          propertyTypes={propertyTypes}
          selectedPropertyType={selectedPropertyType}
          setSelectedPropertyType={setSelectedPropertyType}
          className="w-full max-w-[352px]"
        />
        <SectionHeading
          title="We make it easy for houses and apartments."
          subtitle="Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services."
          className="max-w-[544px]"
        />
        {/* Desktop grid */}
        <div className="hidden lg:grid w-full px-8 grid-cols-3 gap-10">
          {filteredProperties.map((property) => (
            <PropertyCard property={property} hasTypeTag key={property.id} />
          ))}
        </div>
      </div>

      {/* Mobile slider */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pt-11">
          {filteredProperties.map((property) => (
            <div className="first:ml-8 last:pr-8" key={property.id}>
              <PropertyCard property={property} hasTypeTag />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

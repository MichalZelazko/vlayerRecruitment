import { IProperty } from "../../data/properties";
import FavouriteButton from "../common/FavouriteButton";
import SparklesIcon from "./SparklesIcon";

interface IPropertyCardProps {
  property: IProperty;
  hasTypeTag?: boolean;
  hasFavouriteButton?: boolean;
  className?: string;
}

export default function PropertyCard({
  property,
  hasTypeTag = false,
  hasFavouriteButton = false,
  className,
}: IPropertyCardProps) {
  return (
    <div
      key={property.id}
      className={`h-full w-full min-w-[280px] max-w-[344px] bg-base-0 border border-base-200 rounded-lg hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-50 object-cover rounded-t-lg"
      />
      <div className="p-4 sm:p-6 pt-8 flex flex-col gap-2 relative z-10">
        {hasTypeTag && (
          <>
            <span className="absolute inline-flex items-center gap-1 top-0 left-0 bg-secondary-500 text-white text-sm font-semibold px-4 py-2 rounded-t-lg rounded-r-lg -translate-y-1/2 -translate-x-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:translate-y-1/2 after:translate-x-[2.5px] after:-z-10 after:w-3 after:h-3 after:bg-secondary-500 after:rotate-45">
              <SparklesIcon width={15} height={15} className="inline" />{" "}
              {property.type}
            </span>
            <div className="absolute top-0 left-0 w-3 h-3 bg-white translate-y-4.5"></div>
          </>
        )}
        <div className="flex gap-1">
          <div className="flex flex-col items-start flex-grow gap-1">
            <p className="inline-flex items-center text-2xl font-extrabold text-secondary-500">
              ${property.price.toLocaleString("en-US")}
              <span className="text-base font-medium text-gray-500 ">
                /month
              </span>
            </p>
            <h4 className="text-xl font-semibold">{property.name}</h4>
          </div>
          {hasFavouriteButton && <FavouriteButton />}
        </div>
        <p className="text-gray-600 text-left">{property.location}</p>
      </div>
    </div>
  );
}

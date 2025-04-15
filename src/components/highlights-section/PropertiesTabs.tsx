interface IPropertiesTabsProps {
  propertyTypes: string[];
  selectedPropertyType: string;
  setSelectedPropertyType: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export default function PropertiesTabs({
  propertyTypes,
  selectedPropertyType,
  setSelectedPropertyType,
  className,
}: IPropertiesTabsProps) {
  return (
    <ul
      className={`grid grid-cols-${propertyTypes.length} gap-3 md:gap-8 text-lg font-medium text-center bg-secondary-0/30 border border-base-300/30 rounded-lg p-2 ${className}`}
    >
      {propertyTypes.map((propertyType) => (
        <li key={propertyType} className="w-full text-center">
          <button
            type="button"
            className={`py-3 px-1 sm:px-2 rounded-lg border w-full text-center transition-all duration-300  cursor-pointer ${
              selectedPropertyType === propertyType
                ? "border-base-300/30 bg-base-0 text-secondary-500 font-bold shadow-2xs hover:bg-secondary-0 active:border-secondary-100 active:bg-secondary-0 focus:border-secondary-300 focus:bg-secondary-600/20"
                : "border-transparent text-base-600 hover:text-secondary-300 active:text-secondary-300 focus:text-secondary-300"
            }`}
            onClick={() => setSelectedPropertyType(propertyType)}
          >
            {propertyType + "s"} {/* Make sure the name is plural */}
          </button>
        </li>
      ))}
    </ul>
  );
}

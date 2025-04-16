import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.webp";
import apartment1 from "../assets/apartment1.webp";
import apartment2 from "../assets/apartment2.webp";
import apartment3 from "../assets/apartment3.webp";

export interface IProperty {
  id: number;
  type: string;
  name: string;
  location: string;
  price: number;
  image: string;
  isFavorite: boolean;
}

export const properties: IProperty[] = [
  {
    id: 1,
    type: "House",
    name: "Palm Harbor",
    location: "2699 Green Valley, Highland Lake, FL",
    price: 3440,
    image: house1,
    isFavorite: false,
  },
  {
    id: 2,
    type: "House",
    name: "St. Crystal",
    location: "210 US Highway, Highland Lake, FL",
    price: 6550,
    image: house2,
    isFavorite: false,
  },
  {
    id: 3,
    type: "House",
    name: "Faulkner Ave",
    location: "909 Woodland St, Michigan, IN",
    price: 4950,
    image: house3,
    isFavorite: false,
  },
  {
    id: 4,
    type: "Apartment",
    name: "Tarpon Bay",
    location: "103 Lake Shores, Michigan, IN",
    price: 2140,
    image: apartment1,
    isFavorite: false,
  },
  {
    id: 5,
    type: "Apartment",
    name: "Cove Red",
    location: "243 Curlew Road, Palm Harbor, TX",
    price: 1450,
    image: apartment2,
    isFavorite: false,
  },
  {
    id: 6,
    type: "Apartment",
    name: "Beverly Springfield",
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    price: 3850,
    image: apartment3,
    isFavorite: false,
  },
];

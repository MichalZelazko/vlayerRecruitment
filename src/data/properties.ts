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
    image: "src/assets/house1.webp",
    isFavorite: false,
  },
  {
    id: 2,
    type: "House",
    name: "St. Crystal",
    location: "210 US Highway, Highland Lake, FL",
    price: 6550,
    image: "src/assets/house2.webp",
    isFavorite: false,
  },
  {
    id: 3,
    type: "House",
    name: "Faulkner Ave",
    location: "909 Woodland St, Michigan, IN",
    price: 4950,
    image: "src/assets/house3.webp",
    isFavorite: false,
  },
  {
    id: 4,
    type: "Apartment",
    name: "Tarpon Bay",
    location: "103 Lake Shores, Michigan, IN",
    price: 2140,
    image: "src/assets/apartment1.webp",
    isFavorite: false,
  },
  {
    id: 5,
    type: "Apartment",
    name: "Cove Red",
    location: "243 Curlew Road, Palm Harbor, TX",
    price: 1450,
    image: "src/assets/apartment2.webp",
    isFavorite: false,
  },
  {
    id: 6,
    type: "Apartment",
    name: "Beverly Springfield",
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    price: 3850,
    image: "src/assets/apartment3.webp",
    isFavorite: false,
  },
];

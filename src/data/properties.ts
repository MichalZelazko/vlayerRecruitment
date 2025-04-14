interface Property {
  id: number;
  type: "House" | "Apartments";
  name: string;
  location: string;
  price: number;
  image: string;
}

export const properties: Property[] = [
  {
    id: 1,
    type: "House",
    name: "Palm Harbor",
    location: "2699 Green Valley, Highland Lake, FL",
    price: 3440,
    image: "../assets/house1.jpg",
  },
  {
    id: 2,
    type: "House",
    name: "St. Crystal",
    location: "210 US Highway, Highland Lake, FL",
    price: 6550,
    image: "../assets/house2.jpg",
  },
  {
    id: 3,
    type: "House",
    name: "Faulkner Ave",
    location: "909 Woodland St, Michigan, IN",
    price: 4950,
    image: "../assets/house3.jpg",
  },
  {
    id: 4,
    type: "Apartments",
    name: "Tarpon Bay",
    location: "103 Lake Shores, Michigan, IN",
    price: 2140,
    image: "../assets/apartment1.png",
  },
  {
    id: 5,
    type: "Apartments",
    name: "Cove Red",
    location: "243 Curlew Road, Palm Harbor, TX",
    price: 1450,
    image: "../assets/apartment2.png",
  },
  {
    id: 6,
    type: "Apartments",
    name: "Beverly Springfield",
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    price: 3850,
    image: "../assets/apartment3.png",
  },
];

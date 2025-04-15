export interface ITestimonial {
  id: number;
  name: string;
  role: "Renter" | "Tenant" | "Manager";
  quote: string;
  image: string;
  bgColor: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Mira Culos",
    role: "Renter",
    quote:
      "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
    image: "src/assets/user1.png",
    bgColor: "#DED1FA",
  },
  {
    id: 2,
    name: "Mark Brown",
    role: "Renter",
    quote:
      "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
    image: "src/assets/user2.png",
    bgColor: "#D6D8E5",
  },
  {
    id: 3,
    name: "Jake White",
    role: "Renter",
    quote:
      "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
    image: "src/assets/user3.png",
    bgColor: "#D6D8E5",
  },
];

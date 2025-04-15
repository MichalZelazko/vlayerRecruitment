import SectionHeading from "../common/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-8 grid place-items-center bg-gradient-to-b from-white to-[#f4effe]">
      <div className="max-w-[736px] flex flex-col gap-y-11 px-8 md:px-0 text-center">
        <SectionHeading
          title="Testimonials"
          subtitle="See what our property managers, landlords, and tenants have to say"
          className="md:px-24"
        />
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

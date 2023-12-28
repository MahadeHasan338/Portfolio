import TestimonialImg01 from "/public/testimonials/alouni.jpeg";
import TestimonialImg02 from "/public/testimonials/no-image.jpg";
import TestimonialImg03 from "/public/testimonials/shibbir.jpeg";
import TestimonialImg04 from "/public/testimonials/no-image.jpg";
import FancyTestimonialsSlider from "./TestimonialCards";
import SectionWrapper from "../SectionWrapper";

export default function FancyTestimonialSliderPage() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "Working with Mr. Shohel Rana is an honor. His wealth of experience and knowledge positions him as a senior engineer and adept team leader, seamlessly navigating both management and development.",
      name: "Alouani Youssef",
      role: "Software Engineer",
    },
    {
      img: TestimonialImg02,
      quote:
        "I mentored Shohel at Next IT Limited, Dhaka, from 2010 to 2020. He's dedicated, detail-oriented, and skilled at overcoming complex challenges. Shohel excels in fulfilling artistic project objectives. Highly recommend him for your Software Engineer position.",
      name: "Mahbubr Rashid",
      role: "Chief Technology Officer",
    },
    {
      img: TestimonialImg03,
      quote:
        "I've worked alongside Shohel Rana for years and wholeheartedly recommend him as an excellent software engineer. He's motivated, committed to learning, and delivers robust solutions. Shohel's passion for learning and dedication will fuel his career growth.",
      name: "Shibbir Ahmed Asif",
      role: "Software Engineer",
    },
    {
      img: TestimonialImg04,
      quote:
        "Shohel Rana excels in full-stack development, demonstrating deep technical expertise and leadership. He fosters inclusive teams and guides startups through growth. A brilliant engineer and compassionate mentor, he's an asset to any organization.",
      name: "Shoriful Islam",
      role: "Solution Architect",
    },
  ];

  return (
    <SectionWrapper
      id="testimonials"
      className="mx-4 md:mx-0 mb-28 lg:mb-40  flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-center">Testimonials</h2>

      <div className="mt-6 lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </SectionWrapper>
  );
}

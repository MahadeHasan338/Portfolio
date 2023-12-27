import TestimonialImg01 from "/public/testimonials/alouni.jpeg";
import TestimonialImg02 from "/public/testimonials/no-image.jpg";
import TestimonialImg03 from "/public/testimonials/khayrul.jpeg";
import FancyTestimonialsSlider from "./TestimonialCards";
import SectionWrapper from "../SectionWrapper";

export default function FancyTestimonialSliderPage() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "It is an honor to work with Mr.Shohel Rana, the amount of knowledge and experience he has during all his experiences made him a great senior engineer, who can be a great team leader, regarding his ability to navigate between the management side and the development side.",
      name: "Alouani Youssef",
      role: "Software Engineer",
    },
    {
      img: TestimonialImg02,
      quote:
        "I was Shohel’s team lead and mentor at Next IT Limited, Dhaka, Bangladesh. We worked together for ten years, from 2010 to 2020. During the time we worked together, I have seen how dedicated he was towards his work and how skillfully he overcame complex challenges that are essential to being a software engineer. I got him detail oriented and rarely has any bugs in his finished product. I can say that he has tremendous potential to face any challenges in a complex project. The nicest thing is that he is a wonderful team player and knows how to fulfill the artistic objectives of the project in the best way possible.I would whole-heartedly recommend Shohel for your Software Engineer position and I believe you should seize the opportunity to have a dynamic and skilled programmer on your team.",
      name: "Mahbubr Rashid",
      role: "Chief Technology Officer",
    },
    {
      img: TestimonialImg03,
      quote:
        "Experienced person with good leadership skill. He was my team lead and we worked together for 1 year and 2 months. I learned so much from him about software development, javascript and reactjs.",
      name: "Md Khayrul Islam",
      role: "Software Engineer",
    }
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

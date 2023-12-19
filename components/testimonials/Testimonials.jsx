import TestimonialImg01 from "/public/testimonials/testimonial-01.webp";
import TestimonialImg02 from "/public/testimonials/testimonial-02.webp";
import TestimonialImg03 from "/public/testimonials/testimonial-03.webp";
import FancyTestimonialsSlider from "../testimonials/testimonialCards";
import SectionWrapper from "../SectionWrapper";

export default function FancyTestimonialSliderPage() {
  const testimonials = [
    {
      img: TestimonialImg01,
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: TestimonialImg02,
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: TestimonialImg03,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  return (
    <SectionWrapper
      id="testimonials"
      className="mx-4 md:mx-0 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-center">Testimonials</h2>

      <div className="mt-6 lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </SectionWrapper>
  );
}

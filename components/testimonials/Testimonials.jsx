import TestimonialImg01 from "/public/testimonials/alouni.jpeg";
import TestimonialImg02 from "/public/testimonials/mou.jpeg";
import TestimonialImg03 from "/public/testimonials/no-image.jpg";
import TestimonialImg04 from "/public/testimonials/Khayrul.jpeg";
import TestimonialImg05 from "/public/testimonials/arun.jpeg";
import TestimonialImg06 from "/public/testimonials/nahid.jpg";
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
        "Shohel Rana was a great mentor to me. He managed different teams. I could learn a lot about management from him. He advised me in solving different problems. He was very supportive to all the team members.",
      name: "Ayesha Siddika Mou",
      role: "Project Coordinator",
    },
    {
      img: TestimonialImg03,
      quote:
        "I was Shohel’s team lead and mentor at Next IT Limited, Dhaka, Bangladesh. We worked together for ten years, from 2010 to 2020. During the time we worked together, I have seen how dedicated he was towards his work and how skillfully he overcame complex challenges that are essential to being a software engineer. I got him detail oriented and rarely has any bugs in his finished product. I can say that he has tremendous potential to face any challenges in a complex project. The nicest thing is that he is a wonderful team player and knows how to fulfill the artistic objectives of the project in the best way possible.I would whole-heartedly recommend Shohel for your Software Engineer position and I believe you should seize the opportunity to have a dynamic and skilled programmer on your team.",
      name: "Mahbubr Rashid",
      role: "Chief Technology Officer",
    },
    {
      img: TestimonialImg04,
      quote:
        "Experienced person with good leadership skill. He was my team lead and we worked together for 1 year and 2 months. I learned so much from him about software development, javascript and reactjs.",
      name: "Md Khayrul Islam",
      role: "Software Engineer",
    },
    {
      img: TestimonialImg05,
      quote:
        "We have Worked together for 1.5+ years in same team(Frontend). He was my lead as well as Development Manager of that company. I am highly recommending him as Software Architect or Development Manager. He worked too hard to give a proper and up-to-date shape of the work culture of my previous company and gave continuous support to team members. Those achievement present him as a valuable resource in software field.It's was a great opportunity to work with him.",
      name: "Arun Kundu",
      role: "Frontend Engineer",
    },
    {
      img: TestimonialImg06,
      quote:
        "He is very active and supportive person. He is very good team lead. His coding structure is the best have i ever seen. He have a deep knowledge on different technologies",
      name: "Nahid Hasan",
      role: "Full Stack Engineer",
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

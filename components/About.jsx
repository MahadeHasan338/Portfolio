import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="mb-28 lg:mb-40 pt-5 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900"
    >
      <h2 className="text-4xl text-center">About Me</h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-6 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <Image
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
            src="/about/shohel.jpeg"
          />
          <span className="font-medium font-sans">
            {"< I Build Stuff 👨🏻‍💻 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 px-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">Shohel Rana</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10">
              Lead Full Stack Engineer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              As a highly educated and experienced Software Development Manager
              with over 14 years of experience, I specialize in large, complex
              commercial projects, utilizing my expertise in Python, Django,
              Node.js, and React. My work in innovating healthcare, ERP/CRM,
              omnichannel data analytics, payment systems, and SaaS has allowed
              me to enhance software with AI/ML, delivering robust and secure
              solutions. A catalyst for business growth and technological
              evolution, I consistently surpass goals and advocate for a You
              build, You run culture. By leveraging technology, I maximize
              customer satisfaction and drive business success. I am committed
              to delivering high-quality solutions, ensuring accountability, and
              fostering collaborative, diverse teams for professional growth.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href="https://drive.google.com/file/d/1O3E1hCo7Copd0oxlw6IxL8bFE9C5Umsd/view?fbclid=IwAR2IRfTTnztsEDm1i-xP_kd3K9xxScoIrOPZ7VEmuXJg9YGye2qs8vQDKc0"
                target="_blank"
                className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

import { useState } from "react";
import { ViewAll } from "../projects/Projects";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experienceData = [
    {
      company: "Union Group",
      url: "https://www.linkedin.com/company/union-group-1989-ltd",
      location: "Dhaka, Bangladesh | On Site",
      position: "Software Engineer",
      desc: [
        "Performed comprehensive requirement analysis and engaged actively in all development phases.",
        "Cultivated a collaborative culture emphasizing knowledge exchange, leading to a remarkable 50% surge in salary.",
        "Assisted in writing clean, efficient, and modular code for various software projects.",
        "Leveraging these skills to achieve exceptional outcomes.",
      ],
      duration: "Oct 2009 - Nov 2010",
      skills:
        "JavaScript · C# · .NET Framework · Microsoft SQL Server · Crystal Reports · SQL · Visual Basic",
    },
    {
      company: "Next IT Ltd.",
      url: "https://www.linkedin.com/company/nextitltd",
      location: "Dhaka, Bangladesh | On Site",
      position: "Software Engineer",
      desc: [
        "Dedicatedly participated in daily coding tasks, continually expanding technological proficiency.",
        "Effectively managed and contributed to the successful execution of over 20 projects.",
      ],
      duration: "Dec 2010 - Dec 2012",
      skills:
        "JavaScript · C# · Agile Methodologies · .NET Framework · Microsoft SQL Server · jQuery · SQL · EF",
    },
    {
      company: "Next IT Ltd.",
      url: "https://www.linkedin.com/company/nextitltd",
      location: "Dhaka, Bangladesh | On Site",
      position: "Senior Software Engineer",
      desc: [
        "Spearheaded the design, development, and deployment of project components, yielding robust features and functionalities.",
        "Successfully resolved critical project challenges, ensuring seamless progress.",
        "Analyzed and recommended system enhancements, resulting in a 20% increase in overall project efficiency.",
      ],
      duration: "Jan 2013 - Dec 2016",
      skills:
        "Node.js · JavaScript · Angular · C# · .NET Framework · Microsoft SQL Server · jQuery · SQL · EF · Redis",
    },
    {
      company: "Next IT Ltd.",
      url: "https://www.linkedin.com/company/nextitltd",
      location: "Dhaka, Bangladesh | On Site",
      position: "Lead Software Engineer",
      desc: [
        "Led a team of developers through the end-to-end software development cycle, encompassing design, coding, testing, and debugging of applications.",
        "Provided training and mentorship to junior developers while staying current with the latest development tools and technologies.",
        "Effectively managed and coordinated frontend teams, including mobile, QA, and AI divisions, ensuring seamless collaboration and synchronization across diverse modules.",
        "Achieved a substantial 40% growth in product revenue by strategizing and executing an automated canteen ticketing system.",
        "Leveraging these competencies to drive outstanding achievements.",
      ],
      duration: "Jan 2017 - Oct 2018",
      skills:
        "Node.js · JavaScript · Angular · C# · Microservices · Design Patterns · Agile Methodologies · .NET Framework · Microsoft SQL Server · jQuery · SQL · EF · Hibernate · Redis",
    },
    {
      company: "IdeaScale",
      url: "https://www.linkedin.com/company/ideascale",
      location: "Dhaka, Bangladesh | On Site",
      position: "Lead Software Engineer",
      desc: [
        "Collaborated with the product team to successfully implement 15 new features using a mobile-first approach.",
        "Managed, optimized, troubleshot, and improved websites while conducting 200+ unit tests.",
        "Architected and developed frontend systems to ensure robustness and scalability.",
        "Implemented effective strategies that resulted in a 40% increase in application speed and scalability, leading to enhanced performance and achieving a 98% user satisfaction rate.",
        "Contributing to top-notch outcomes.",
      ],
      duration: "Feb 2019 - Jan 2020",
      skills:
        "React.js · Node.js · JavaScript · TypeScript · Angular · Agile Methodologies · Java · Spring Boot · jQuery · MySQL · SQL · Elasticsearch",
    },
    {
      company: "SELISE Digital Platforms",
      url: "https://www.linkedin.com/company/selise",
      location: "Dhaka, Bangladesh | On Site",
      position: "Senior Software Engineer",
      desc: [
        "Utilized user-centered design principles to create interfaces that boosted user experience and engagement by 25%.",
        "Contributed throughout all stages of product development, successfully implementing RESTful APIs for seamless integration.",
        "Revitalized the UI of a complete event management system, executing cross-browser testing, and introducing user-facing features.",
        "Resulting in a 30% increase in project efficiency.",
      ],
      duration: "Feb 2020 - Apr 2020",
      skills:
        "Node.js · MongoDB · JavaScript · TypeScript · Angular · C# · .NET Core · Design Patterns · Agile Methodologies · SQL",
    },
    {
      company: "MyMedicalHUB ",
      url: "https://www.linkedin.com/company/mymedicalhub",
      location: "Dhaka, Bangladesh | On Site",
      position: "Software Development Manager",
      desc: [
        "Provided technical leadership to a cross-functional team, fostering a collaborative environment.",
        "Ensured a 50% improvement in project delivery efficiency through close collaboration with stakeholders.",
        "Developed user-facing features, applying expertise in relevant technologies.",
        "Optimized application speed and scalability, achieving a 30% enhancement through performance tuning and code optimization.",
        "Established and maintained active collaboration and communication channels with stakeholders for 100% alignment.",
      ],
      duration: "May 2020 - Jul 2022",
      skills:
        "TensorFlow · React.js · Node.js · MongoDB · Project Management · JavaScript · TypeScript · Django · C# · .NET Core · Artificial Intelligence (AI) · Machine Learning · Natural Language Processing (NLP) · Microsoft SQL Server · jQuery · SQL · EF · React Native",
    },
    {
      company: "QALQUL",
      url: "https://www.linkedin.com/company/qalqul",
      location: "Casablanca, Morocco | On Site",
      position: "Principal Software Engineer",
      desc: [
        "Developed and designed sturdy system architectures to ensure scalability and performance, resulting in a 40% boost in efficiency.",
        "Implemented process improvements and best practices to maintain high-quality standards during a team's growth, achieving a 30% increase in team productivity.",
        "Proactively addressed challenges, realigned priorities, and ensured on-time delivery of projects, maintaining a 95% project punctuality rate.",
        "Collaborated closely with project management teams to gather requirements and formulate functional and design documents for 50+ projects.",
        "Contributed and successfully delivered software solutions for 40+ projects.",
      ],
      duration: "Aug 2022 - Jul 2023",
      skills:
        "React.js · Node.js · MongoDB · Project Management · JavaScript · TypeScript · NestJS · Go (Programming Language) · Gin · Jest · PostgreSQL · Microfrontend · Microservices · Design Patterns · Artificial Intelligence (AI) · Machine Learning · Natural Language Processing (NLP) · Scaled Agile Framework · Docker Products · jQuery · MySQL · SQL · Apache Kafka · RabbitMQ · Redis · Elasticsearch",
    },
    {
      company: "DoctorBox",
      url: "https://www.linkedin.com/company/doctorbox",
      location: "Berlin, Germany | Remote",
      position: "Software Engineer",
      desc: [
        "Designing and developing user-friendly interfaces with ReactJS",
        "Implementing state management using React Query, Redux, or Context API",
        "Integrating TypeScript for strong typing and enhanced code predictability",
        "Collaborating with backend teams for API integration and data management",
        "Building reusable components and optimizing front-end performance",
        "Conducting thorough testing, debugging, and code reviews",
        "Staying abreast of the latest front-end trends and technologies",
      ],
      duration: "Aug 2022 - Jul 2023",
      skills:
        "React.js · JavaScript · TypeScript · Design Patterns · Docker Products · Java",
    },
  ];

  const educationData = [
    {
      institute: "Rajshahi University",
      degree: "Bachelor of Science in Computer Science and Engineering",
      desc: [
        "I actively participated in the Computer Science Club, organizing competitions, workshops, and lectures. I regularly joined hackathons, collaborating with peers to develop innovative solutions and enhance programming skills. As part of the ACM Student Chapter, I attended meetings, gaining insights into industry trends and networking with experts like Kaykobad and Zafar Iqbal. I maintained strong ties with the alumni network, leveraging mentorship and career opportunities in the field.",
      ],
      duration: "August 2016 - May 2020",
    },
    {
      institute: "Daffodil International University-DIU",
      degree: "Master of Engineering",
      desc: [
        "Active in the Programming Club at DIU, organizing events and competitions. Explored AI topics and contributed to projects in the AI Society at DIU. Completed courses in advanced database management, software engineering, and cryptography. Acquired skills in machine learning and natural language processing. Conducted research on content-based classification, published in reputable journals. Reflects dedication to continuous learning and strong technical, problem-solving, and research abilities.",
      ],
      duration: "August 2016 - May 2020",
    },
    {
      institute: "Arcade University of Applied Sciences",
      degree: "Master's degree",
      desc: [
        "Engaged in various data-focused activities, leading group projects with yfinance and pandas. Participated in Big Data competitions and hackathons, and attended Apache Kafka workshops. Active in the Data Science Club and INFORMS chapter, regularly attending Big Data Meetups and machine learning study groups.",
      ],
      duration: "August 2012 - May 2016",
    },
  ];

  const [show, setShow] = useState("Experience");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState([...experienceData].reverse());
  const [educations, setEducations] = useState([...educationData].reverse());

  return (
    <SectionWrapper id="experience" className="mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Experience" ? experiences : educations).map((e, i) => (
                <ExperienceCard key={i} {...e} index={i} />
              ))
            : (show === "Experience" ? experiences : educations)
                .slice(0, 2)
                .map((e, i) => <ExperienceCard key={i} {...e} index={i} />)}
        </div>
      </div>

      {(show === "Experience" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;

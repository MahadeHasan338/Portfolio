import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      name: "JavaScript Projects Website",
      image: "/projects/AI/other-1.webp",
      category: "AI/ML",
      techstack: "HTML5, CSS3, TailwindCSS, SCSS, JavaScript, jQuery, Netlify",
      links: {
        visit: "https://example.com/project1",
        code: "https://github.com/example/project1",
        video: "https://youtube.com/example-video1",
      },
    },
    {
      name: "SPPU Prep",
      image: "/projects/mobile/bank-1.webp",
      category: "Mobile",
      techstack: "JavaScript, React Native, Expo, TailwindCSS, Firebase",
      links: {
        visit: "https://example.com/project3",
      },
    },
    {
      name: "Artwork",
      image: "/projects/web/artwork.png",
      category: "Web",
      techstack: "React, Python, Django",
      links: {
        visit: "https://example.com/project3",
      },
    },
    {
      name: "Mobile Inventory Management System",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, SQL, Visual Basic, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "Cycling Event Management System",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "Composite Knitwear ERP",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "2D Cutting Stock Algorithm for Printing Industries",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "Volunteer Management System",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "C#, Microsoft Azure, Microsoft SQL Server, SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "Task Management System",
      image: "/projects/mern-stack/mern-6.webp",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "Software Prototyping System",
      image: "/projects/mern-stack/mern-3.webp",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, jQuery, SQL, EF",
      links: {
        visit: "/",
      },
    },
    {
      name: "NEXT ERP Solutions",
      image: "/projects/web/next.png",
      category: "Web",
      techstack: "C#, Microsoft SQL Server, Angular, jQuery, SQL, EF, Redis",
      links: {
        visit: "/",
      },
    },
    {
      name: "Pridesys ERP",
      image: "/projects/web/preside.png",
      category: "Web",
      techstack:
        "JavaScript, Microsoft SQL Server, Angular, Microservices, Java, Spring Boot, SQL",
      links: {
        visit: "https://pridesys.com/",
      },
    },
    {
      name: "Idea Management System",
      image: "/projects/web/school.png",
      category: "Web",
      techstack:
        "React.js, Node.js, TypeScript, JavaScript, Angular, MySQL, SQL, Elasticsearch",
      links: {
        visit: "https://ideascale.com/",
      },
    },
    {
      name: "Parkolay",
      image: "/projects/web/parkoly.png",
      category: "Web",
      techstack: "React, Python, Django",
      links: {
        visit: "https://parkolay.netlify.app/app",
      },
    },
    {
      name: "Efficient Musculoskeletal Management Assistant (EMMA)",
      image: "/projects/web/medic.png",
      category: "Web",
      techstack:
        "React.js, Node.js, C#, .NET Core, TypeScript, JavaScript, MongoDB, Project Management, Django, Microsoft SQL Server, TensorFlow, Artificial Intelligence (AI), Machine Learning, Natural Language Processing (NLP), jQuery, SQL, EF, React Native",
      links: {
        visit: "https://mymedicalhub.com/",
      },
    },
    {
      name: "Unified-IOP – Unified Intelligent Operations Platform",
      image: "/projects/web/unified.png",
      category: "Web",
      techstack:
        "React.js, Node.js, TypeScript, JavaScript, NestJS, MongoDB, Project Management, Go (Programming Language), Gin, Jest, Microfrontend, Microservices, Artificial Intelligence (AI), Machine Learning, Natural Language Processing (NLP), Docker Products, jQuery, MySQL, SQL, Apache Kafka, RabbitMQ, Redis, Elasticsearch",
      links: {
        visit: "https://qalqul.com",
      },
    },
    {
      name: "DoctorBox - the super app for your health",
      image: "/projects/web/doctorbox.webp",
      category: "Web",
      techstack:
        "Python (Programming Language), Next.js, Amazon Web Services (AWS), Machine Learning",
      links: {
        visit: "https://www.doctorbox.de",
      },
    },
  ];

  const [projects, setProjects] = useState([...projectsData].reverse());
  const categories = [...Array.from(new Set(projects.map((s) => s.category)))];
  const [category, setCategory] = useState(categories[0]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewAll, setViewAll] = useState(false);

  const filterProjects = (cat) => {
    setViewAll(false);
    setCategory(cat);
    setFilteredProjects(
      projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase())
    );
  };

  useEffect(() => {
    filterProjects(categories.includes("Web") ? "Web" : categories[0]);
  }, []);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {categories.map((c, i) => (
          <span
            key={i}
            onClick={() => filterProjects(c)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900"
            } cursor-pointer transition-all`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>

      {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;

export const ViewAll = ({ handleClick, title, scrollTo }) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};

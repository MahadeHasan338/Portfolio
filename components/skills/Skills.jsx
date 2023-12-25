import { useState } from "react";
import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper";

const Skills = () => {
  const skillData = [
    {
      name: "JavaScript",
      category: "Frontend",
      image: "/tech/frontend/javascript.webp",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      image: "/tech/frontend/typeScript.webp",
    },
    {
      name: "AngularJS",
      category: "Frontend",
      image: "/tech/frontend/angular.webp",
    },
    {
      name: "AngularJS",
      category: "Frontend",
      image: "/tech/frontend/vue.svg",
    },
    {
      name: "ReactJS",
      category: "Frontend",
      image: "/tech/frontend/react.webp",
    },
    {
      name: "Redux",
      category: "Frontend",
      image: "/tech/frontend/redux.webp",
    },
    {
      name: "NextJS",
      category: "Frontend",
      image: "/tech/frontend/next.svg",
    },
    {
      name: "Tailwind",
      category: "Frontend",
      image: "/tech/frontend/tailwindcss.webp",
    },
    {
      name: "Material UI",
      category: "Frontend",
      image: "/tech/frontend/material-ui.webp",
    },
    {
      name: "HTML5",
      category: "Frontend",
      image: "/tech/frontend/html-5.webp",
    },
    {
      name: "CSS3",
      category: "Frontend",
      image: "/tech/frontend/css3.webp",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      image: "/tech/frontend/bootstrap.webp",
    },
    {
      name: "Sass",
      category: "Frontend",
      image: "/tech/frontend/sass.webp",
    },
    {
      name: "NodeJS",
      category: "Backend",
      image: "/tech/backend/node-js.webp",
    },
    {
      name: "ExpressJS",
      category: "Backend",
      image: "/tech/backend/express-js.webp",
    },
    {
      name: "NestJS",
      category: "Backend",
      image: "/tech/backend/nest.png",
    },
    {
      name: "Java",
      category: "Backend",
      image: "/tech/backend/java.webp",
    },
    {
      name: ".NET",
      category: "Backend",
      image: "/tech/backend/net.webp",
    },
    {
      name: "Python",
      category: "Backend",
      image: "/tech/backend/python.png",
    },
    {
      name: "Django",
      category: "Backend",
      image: "/tech/backend/django.webp",
    },
    {
      name: "GoLang",
      category: "Backend",
      image: "/tech/backend/go.webp",
    },
    {
      name: "MongoDB",
      category: "Backend",
      image: "/tech/backend/mongo.webp",
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      image: "/tech/backend/postgres.png",
    },
    {
      name: "MySQL",
      category: "Backend",
      image: "/tech/backend/mysql.png",
    },
    {
      name: "Firebase",
      category: "Backend",
      image: "/tech/backend/firebase.webp",
    },
    {
      name: "AWS",
      category: "Backend",
      image: "/tech/backend/aws.webp",
    },
    {
      name: "NumPy",
      category: "AI",
      image: "/tech/AI/numpy.svg",
    },
    {
      name: "Tensorflow",
      category: "AI",
      image: "/tech/AI/tensorflow.webp",
    },
    {
      name: "PyTorch",
      category: "AI",
      image: "/tech/AI/pytorch.png",
    },
    {
      name: "NLP",
      category: "AI",
      image: "/tech/AI/nlp.webp",
    },
    {
      name: "YOLOv8",
      category: "AI",
      image: "/tech/AI/yolov.png",
    },
    {
      name: "Google",
      category: "Others",
      image: "/tech/others/google.webp",
    },
    {
      name: "Android Studio",
      category: "Others",
      image: "/tech/others/studio.webp",
    },
    {
      name: "React Native",
      category: "Others",
      image: "/tech/others/react-native.webp",
    },
    {
      name: "SQLite",
      category: "Others",
      image: "/tech/others/lite.webp",
    },
    {
      name: "Git",
      category: "Others",
      image: "/tech/others/git.webp",
    },
    {
      name: "GitHub",
      category: "Others",
      image: "/tech/others/github.webp",
    },
    {
      name: "Docker",
      category: "Others",
      image: "/tech/others/docker.png",
    },
    {
      name: "Jira",
      category: "Others",
      image: "/tech/others/jira.webp",
    },
    {
      name: "DigitalOcean",
      category: "Others",
      image: "/tech/others/digital-ocean.webp",
    },
    {
      name: "Vercel",
      category: "Others",
      image: "/tech/others/vercel.svg",
    },
    {
      name: "Netlify",
      category: "Others",
      image: "/tech/others/netlify.webp",
    },
  ];

  const categories = Array.from(new Set(skillData.map((s) => s.category)));
  const [category, setCategory] = useState(categories[0]);

  return (
    <SectionWrapper
      id="skills"
      className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20"
    >
      <h2 className="text-4xl text-center">Tech Stack</h2>

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c, i) => (
          <span
            key={i}
            onClick={() => setCategory(c)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 dark:bg-violet-600 text-white"
                : "bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900"
            } transition-all capitalize`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData
          .filter((s) => s.category.toLowerCase() === category.toLowerCase())
          .map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;

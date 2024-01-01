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
      name: "Angular",
      category: "Frontend",
      image: "/tech/frontend/angular.webp",
    },
    {
      name: "AngularJS",
      category: "Frontend",
      image: "/tech/frontend/angular-js.webp",
    },
    {
      name: "VueJS",
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
      name: "Styled Component",
      category: "Frontend",
      image: "/tech/frontend/styled-components.png",
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
      category: "Database",
      image: "/tech/backend/mongo.webp",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      image: "/tech/backend/postgres.png",
    },
    {
      name: "MySQL",
      category: "Database",
      image: "/tech/backend/mysql.png",
    },
    {
      name: "Firebase",
      category: "Database",
      image: "/tech/backend/firebase.webp",
    },
    {
      name: "AWS",
      category: "Backend",
      image: "/tech/backend/aws.webp",
    },
    {
      name: "Php",
      category: "Backend",
      image: "/tech/backend/php.png",
    },
    {
      name: "Flask",
      category: "Backend",
      image: "/tech/backend/flask.png",
    },
    {
      name: "Webhooks",
      category: "Backend",
      image: "/tech/backend/webhooks.png",
    },
    {
      name: "Redis",
      category: "Backend",
      image: "/tech/backend/redis.png",
    },
    {
      name: "GraphQl",
      category: "Backend",
      image: "/tech/backend/graphql.png",
    },
    {
      name: "Elasticsearch,",
      category: "Backend",
      image: "/tech/backend/elastic.png",
    },
    {
      name: "BigQuery,",
      category: "Backend",
      image: "/tech/backend/big.png",
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
      name: "Apache Spark",
      category: "AI",
      image: "/tech/AI/spark.png",
    },
    {
      name: "Scikit-Lear",
      category: "AI",
      image: "/tech/AI/learn.png",
    },
    {
      name: "YOLOv8",
      category: "AI",
      image: "/tech/AI/yolov.png",
    },
    {
      name: "Eslint",
      category: "QA/Testing",
      image: "/tech/QA/eslint.webp",yarn dev
      
    },
    {
      name: "Prettier",
      category: "QA/Testing",
      image: "/tech/QA/prettier.png",
    },
    {
      name: "Cypress",
      category: "QA/Testing",
      image: "/tech/QA/cypress.png",
    },
    {
      name: "Mocha",
      category: "QA/Testing",
      image: "/tech/QA/mocha.png",
    },
    {
      name: "Jest",
      category: "QA/Testing",
      image: "/tech/QA/jest.webp",
    },
    {
      name: "Enzyme",
      category: "QA/Testing",
      image: "/tech/QA/enzyme.png",
    },
    {
      name: "Jira",
      category: "QA/Testing",
      image: "/tech/QA/jira.png",
    },
    {
      name: "A/B Testing",
      category: "QA/Testing",
      image: "/tech/QA/ab.png",
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

  const categorizedSkills = {};
  skillData.forEach((skill) => {
    const { category } = skill;
    if (!categorizedSkills[category]) {
      categorizedSkills[category] = {
        name: category,
        skills: [],
      };
    }
    categorizedSkills[category].skills.push(skill);
  });

  const categoryArray = Object.values(categorizedSkills);

  return (
    <SectionWrapper id="skills" className="mb-28 lg:mb-40">
      <h2 className="text-4xl text-center mb-8">Tech Stack</h2>
      <div className="mx-4 md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 p-4 bg-white rounded-md">
        {categoryArray.map((category) => (
          <SkillCard key={category.name} category={category} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;

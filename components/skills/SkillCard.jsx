import Image from "next/image";

const Skill = ({ category }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl mb-3">{category.name}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center bg-violet-100 text-black h-10 px-2 py-1 rounded-md"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={30}
              height={30}
              className="mr-2"
            />
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

import javascript from "../assets/technologies/javascript.png";
import typescript from '../assets/technologies/typescript.png';
import node from "../assets/technologies/node.png";
import csharp from '../assets/technologies/csharp.png';
import docker from '../assets/technologies/docker.png';
import git from '../assets/technologies/git.png';
import github from '../assets/technologies/github.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 2,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-800"
    },
    {
      id: 2,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: csharp,
      title: "C#",
      style: "shadow-purple-500"
    },
    {
      id: 4,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500"
    },
    {
      ud: 5,
      src: git,
      title: "Git",
      style: "shadow-orange-500"
    },
    {
      ud: 6,
      src: github,
      title: "GitHub",
      style: "shadow-white"
    },

  ];

  return (
    <div
      className="
        w-full h-full md:h-screen bg-gradient-to-b
        from-black 
        to-gray-800
        p-4
        text-gray-300"
    >
      <section className="
        max-w-screen-lg
        mx-auto
        flex
        flex-col
        justify-center 
        w-full
        h-auto 
        p-4
        pt-20"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
          Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
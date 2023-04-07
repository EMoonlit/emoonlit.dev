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
        h-full 
        w-full
        md: min-h-screen
        md:w-screen
        bg-gradient-to-b
        from-black
        to-gray-800 
        p-4
        text-gray-300
        md:h-screen"
    >
      <section className="
        mx-auto
        flex
        h-auto
        w-full
        max-w-screen-lg 
        flex-col
        justify-center 
        p-4
        pt-20"
      >
        <div>
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
          Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
import { FaGithub } from "react-icons/fa";
import encryptServer from "../assets/portfolio/encryptServer.jpg";
import portfolioImage from "../assets/portfolio/portfolio.jpg"
import { Element } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: portfolioImage,
      projectName: "emoonlit.dev",
      demoLink: "https://emoonlit.dev",
      githubRepository: "emoonlit.dev",
      description: "This portfolio, my frontend practice lab"
    },
    {
      id: 1,
      src: encryptServer,
      projectName: "Sec Layer",
      demoLink: "",
      githubRepository: "sec-layer",
      description: "C# Api for encrypt and decrypt files and redirect"
    },
    {
      id: 2,
      src: encryptServer,
      projectName: "GitHub Filter Api",
      demoLink: "",
      githubRepository: "repositories-filter-api",
      description: "Api with the purpose of searching and filtering data from repositories consuming the Github API."
    }
  ];

  return (
    <Element
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <section className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, projectName, description, demoLink, githubRepository }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="object-scale-down h-48 w-96 ounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="noopener" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={`${process.env.REACT_APP_INFO_GITHUB}/${githubRepository}`} target="noopener" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <FaGithub size={30} />
                </a>
              </div>
              <div className="items-center justify-center">
                <h3 className="text-2xl m-4 font-bold border-b-4 border-gray-500 ">
                   {projectName}
                </h3>
                <p className="p-3 text-justify">
                    {description}
                </p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Portfolio;
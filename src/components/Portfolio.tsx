import { FaGithub } from "react-icons/fa";
import encryptServer from "../assets/portfolio/encryptServer.jpg";
import portfolioImage from "../assets/portfolio/portfolio.jpg"

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
    <div
    className="
      h-full w-full bg-gradient-to-b from-black
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
        <div className="
          h-full
          justify-center"
        >
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold text-gray-300">
            Portfolio
          </p>
          <p className="py-6 text-gray-300">Check out some of my work right here</p>

        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src, projectName, description, demoLink, githubRepository }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="ounded-md h-48 w-96 object-scale-down duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="noopener" className="m-4 w-1/2 px-6 py-3 text-gray-300 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={`${process.env.REACT_APP_INFO_GITHUB}/${githubRepository}`} target="noopener" className="m-4 w-1/2 px-6 py-3 text-gray-300 duration-200 hover:scale-105">
                    <FaGithub size={30} />
                </a>
              </div>
              <div className="items-center justify-center">
                <a href={`${process.env.REACT_APP_INFO_GITHUB}/${githubRepository}`} target="noopener">
                  <h3 className="m-4 border-b-4 border-gray-500 text-2xl font-bold text-gray-300">
                    {projectName}
                  </h3>
                </a>
                <p className="p-3 text-center text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
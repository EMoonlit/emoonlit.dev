import ProfilePhoto from "../assets/profilePhoto.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, Element } from "react-scroll";

const Home = () => {
  const numberToWords = (num: Number) => {
    const words = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
    ];

    const index = parseInt(num.toString(), 10)
    return words[index] || num.toString()
  };

  const getYearsOfExperience = () => {
    const startYear = Number(process.env.REACT_APP_INFO_RESUME_START_DATE) || 2020
    const currentYear = new Date().getFullYear()
    if (isNaN(startYear)) return "zero"
    return numberToWords(currentYear - startYear)
  };

  return (
    <Element
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <section className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Backend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have {getYearsOfExperience()} years of experience in developing APIs and other projects.
            I currently work on developing chatbots
            using different technologies and platforms.
          </p>

          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfilePhoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </section>
    </Element>
  );
};

export default Home;
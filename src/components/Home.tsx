import ProfilePhoto from "../assets/profilePhoto.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="
        w-full h-screen bg-gradient-to-b
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
        items-center
        justify-center
        px-5
        md:flex-row
        pt-20
        h-full"
      >
        <div className="
          flex flex-col
          justify-center
          h-full"
        >
          <h2 className="
            text-4xl
            sm:text-7xl
            font-bold"
          >
            I'm a Backend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have two years of experience developing API's and other projects.

            Currently, I work with web application development
            using technologies like React for plugins and frontend,
            NodeJs and Dotnet for backend.
          </p>

          <div>
            <Link
              to="/Portfolio"


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
    </div>
  );
};

export default Home;
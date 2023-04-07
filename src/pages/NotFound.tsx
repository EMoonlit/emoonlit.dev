import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section
      id="error-page"  
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
    
    <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            Not Found
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            Page not found, go back to home page
          </p>

          <div>
            <Link
              to="/"
              className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
            >
              Back to Home
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowLeft size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
  </section>
  );
}

export default ErrorPage;
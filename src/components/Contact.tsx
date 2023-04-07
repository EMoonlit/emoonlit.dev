import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: process.env.REACT_APP_INFO_LINKEDIN,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: process.env.REACT_APP_INFO_GITHUB
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: process.env.REACT_APP_INFO_EMAIL
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: process.env.REACT_APP_INFO_RESUME,
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div
      className="
        w-full 
        h-full
        md: min-h-screen
        md:w-screen
        bg-gradient-to-b
      from-black 
      to-gray-800
        p-4
      text-gray-300"
    >
      <section
        className="
            mx-auto
            flex
            h-auto
            max-w-screen-lg
            flex-col
            justify-center
            px-5
            pt-20"
      >
        <div className="pb-8">
          <h3 className="
              sm:text-7x1 
              inline
              border-b-4 
              border-gray-500 
              text-4xl 
              font-bold 
              text-gray-300"
          >
            Contact
          </h3>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-around m-2 md:hidden">
          {links.map(({ id, child, href, style, download }) => (
            <a
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
              href={href}
              // className="mx-auto w-20" 
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          ))}
        </div>

        <div className=" flex items-center justify-center">
          <form
            action={process.env.REACT_APP_GET_FORM}
            method="POST"
            className=" flex w-full flex-col md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            ></textarea>

            <button className="my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white duration-300 hover:scale-110">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
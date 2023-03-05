const Contact = () => {
    return (
      <div
        className="
        w-full h-full md:h-screen bg-gradient-to-b
        from-black 
        to-gray-800
        p-4
        text-gray-300"
      >
        <section 
          className="
            max-w-screen-lg
            mx-auto
            flex
            flex-col
            justify-center
            px-5
            pt-20
            h-auto"
          >
          <div className="pb-8">
          <h3 className="
              text-4xl 
              sm:text-7x1
              font-bold 
              inline 
              border-b-4 
              border-gray-500 
              text-gray-300"
              >
              Contact
            </h3>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
  
          <div className=" flex justify-center items-center">
            <form
              action={process.env.REACT_APP_GET_FORM}
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={10}
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
  
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;
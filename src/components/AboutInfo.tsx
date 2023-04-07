const About = () => {
    return (
      <div
      className="
        h-auto 
        w-full
        md: min-h-screen
        md:w-screen
        bg-gradient-to-b
        from-black 
        to-gray-800
        p-4
        text-gray-300"
      >
        <section className="
        mx-auto
        flex
        h-auto
        max-w-screen-lg
        flex-col
        items-center
        justify-center
        px-5
        pt-20"
        >
        <div className="
          h-full
          justify-center"
        >
            <h3 className="
              sm:text-7x1 
              inline
              border-b-4 
              border-gray-500 
              text-4xl 
              font-bold 
              text-gray-300"
              >
              About
            </h3>
  
          <p className="mt-20 text-xl">
            I'm passionate about technology, I started early in the hardware support and maintenance area.
            As I come from a small town, I could see technology transforming people's lives.

            I currently work on the chatbot developer at Take Blip, 
            company focused automate  relationship with the customer,
            created personalized conversations through the power of artificial intelligence
            and increase business digital results.
          </p>  
          </div>
        </section>
      </div>
    );
  };
  
  export default About;
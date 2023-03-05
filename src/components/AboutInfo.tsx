const About = () => {
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
        pt-20
        h-auto"
        >
        <div className="
          justify-center
          h-full"
        >
            <h3 className="
              text-4xl 
              sm:text-7x1
              font-bold 
              inline 
              border-b-4 
              border-gray-500 
              text-gray-300"
              >
              About
            </h3>
  
          <p className="text-xl mt-20">
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
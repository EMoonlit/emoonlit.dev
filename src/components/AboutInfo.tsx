import { Element } from "react-scroll";

const About = () => {
    return (
      <Element
        name="About"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <section className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-20">
            I'm passionate about technology, I started early in the hardware support and maintenance area.
            As I come from a small town, I could see technology transforming people's lives.

            I currently work on the chatbot developer at Proa.Ai, 
            company focused automate  relationship with the customer,
            created personalized conversations through the power of artificial intelligence
            and increase business digital results.
          </p>  
        </section>
      </Element>
    );
  };
  
  export default About;
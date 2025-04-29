import React from "react";
import aboutImage from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-16 md:py-28 md:px-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Image with background shape */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          {/* Yellow Rectangular Shape Behind Image */}
          <div className="absolute top-4 left-[2px] md:left-[100px] w-[330px] md:w-[350px] h-full bg-yellow-400 rounded-xl z-0" />

          {/* Main Image */}
          <img
            src={aboutImage}
            alt="Bar Interior"
            className="relative z-10 w-[550px] md:w-[350px] h-auto rounded-xl shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4 relative inline-block">
            About <span className="text-white">Us</span>
            <span className="block w-16 h-1 bg-yellow-400 mt-1"></span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius
            doloremque, non perferendis omnis illo rerum accusamus officiis, eos
            ut natus quis iusto vitae commodi. Commodi dolores iure voluptas
            enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci maxime commodi et ea, placeat nihil laborum fugit harum
            suscipit, amet quod minima consequatur odit quaerat quia, ipsum
            eveniet! Non, veritatis?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

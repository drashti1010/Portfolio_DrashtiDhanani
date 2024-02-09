"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className=" col-span-7  place-self-center text-center sm:text-left">
          <h1 className=" text-stone-300 my-4 text-6xl sm:text-4xl lg:text-7xl font-extrabold font-mono">
            <span className=" text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-fuchsia-900 to-blue-500">
              Drashti Dhanani
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Frontend Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "UI Developer",
              1000,
              "React Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "4em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="text-[#747c78] m-4 text-justify text-xl italic">
            Frontend Developer with proficient knowledge in HTML and CSS,
            Javascript as well as third-party libraries such as jQuery and
            React. Seeking to utilize my technical skills and expertise to
            provide value to the employer and contribute to successful projects.
            Aiming to take on new challenges and utilize my coding and debugging
            skills for developing new features and enhance the overall user
            experience.
          </p>
          <div>
            {/* <button>Hire Me</button> */}
            <button className=" w-full sm:w-fit text-stone-300 text-xl font-bold px-10 py-4 my-6 border border-white rounded-full bg-gradient-to-br from-green-500 via-fuchsia-900 to-blue-500 hover:bg-slate-800 ml-4 ">
              Download CV
            </button>
          </div>
        </div>
        <div className=" col-span-5 place-self-center">
          <div className="rounded-full bg-gradient-to-br from-green-500 via-black to-fuchsia-900 w-[250px] h-[250px] lg:w-[400px] h-[400px] relative">
            <Image
              src="/Image/hero-image.png"
              alt="my image"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

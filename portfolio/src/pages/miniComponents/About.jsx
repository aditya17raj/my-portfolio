import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/mypic.png"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[10deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
            I am a passionate and driven BCA student with a keen interest in the intersection of technology and creativity. With a solid foundation in computer applications, I am constantly seeking opportunities to expand my knowledge and skills in the field.
            </p>
            <p>
            Currently pursuing a Bachelor of Computer Applications (BCA) degree, I have honed my skills in various aspects of computer science, including programming languages, database management, and software development. My academic journey has equipped me with both theoretical knowledge and practical experience, preparing me for challenges in the ever-evolving tech industry.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        As I continue my journey in the field of computer applications, my vision is to leverage my skills and knowledge to develop innovative solutions that positively impact society. Whether it's through creating user-friendly software, contributing to groundbreaking projects, or pursuing further research in emerging technologies, I am dedicated to using technology as a catalyst for positive change. My ultimate goal is to play a meaningful role in shaping the future of technology and making a difference in the world.
        </p>
      </div>
    </div>
  );
};

export default About;

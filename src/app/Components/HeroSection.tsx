"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaHackerrank } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

function HeroSection() {
  return (
    <div className=" flex flex-row justify-between items-center text-white mt-20 m-8 ">
      <div className=" flex-col ">
        <h1 className="font-extrabold text-5xl">
          {/* <span className="text-blue-900">
            Hello i'm{" "}
          </span>*/}
          <br></br>
          <div className="mt-6 text-[22px] lg:text-3xl md:text-3xl text-pink-500">
            <TypeAnimation
              sequence={["FRONT-END-DEVELOPER", 1000, "PROGRAMMER", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <h1 className="mt-4 lg:text-5xl text-[33px] font-bold w-full">
            SHREYA SINGH
          </h1>
        </h1>
        <span className="my-4"></span>
        <p className="mt-6 lg:text-[23px]  text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 font-semibold text-[18.7px] ">
          I am a motivated and versatile individual, always eager to embrace new
          challenges.
        </p>
        <p className=" lg:text-[23px]  text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 font-semibold text-[18.7px] ">
          With a deep-seated passion for learning, I am committed to delivering
          high-quality results in every endeavor I undertake.
        </p>

        <div className=" flex mt-6  ">
          <Link href={"https://github.com/shreya26-bit"}>
            <div className="mx-4  hover:text-pink-600 hover:cursor-pointer">
              <AiFillGithub size={29} />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/shreya-singh-4b57a3229/"}>
            <div className="mx-4 hover:text-pink-600 hover:cursor-pointer">
              <BsLinkedin size={29} />
            </div>
          </Link>
          {/* <Link href={"/"}>
            <div className="mx-2  hover:text-pink-600 hover:cursor-pointer">
              <BiLogoGmail size={29} />
            </div>
          </Link> */}
          <Link href={"https://www.hackerrank.com/profile/shreyasingh22261"}>
            <div className="mx-4 hover:text-pink-600 hover:cursor-pointer ">
              <FaHackerrank size={29} />
            </div>
          </Link>
{/* 
          <Link href={"https://www.hackerrank.com/profile/shreyasingh22261"}>
            <div className="mx-4 hover:text-pink-600 hover:cursor-pointer ">
              < BsTwitter size={29} />
            </div>
          </Link> */}
        </div>
      </div>

      <div className="rounded-full bg-[#181818] items-center hidden md:block md:mx-6  shadow shadow-cyan-600 ">
        <Image
          className="rounded-full opacity-70 shadow shadow-cyan-600/50"
          src={"/Images/3.imagess.jpg"}
          alt="hero-image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
export default HeroSection;

import React from "react";

function About() {
  return (
    <div className="mt-60">
      <h1 className=" lg:text-5xl text-4xl font-bold m-4 lg:text-center md:text-center text-pink-500 ">
        About Me{" "}
      </h1>
      {/* <div
        className="mt-4 h-screen flex m-auto "
        style={{
          flex: 1,
          height: "4px",
          backgroundColor: "purple",
          width: "2%",
        }}
      ></div> */}
      <div className="flex flex-col">
        <p className="lg:text-white  hidden lg:block lg:text-center lg:my-2 sm:text-black ">
          Here you will find more information about me,what i do, and my current
          skills mostly in terms{" "}
        </p>
        <p className="lg:text-white sm:text-black lg:text-center hidden lg:block  lg:my-2 ">
          of programming and technology
        </p>
      </div>
      <div className="lg:flex-row lg:mt-40 lg:m-2 m-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-12">
          <div className="flex flex-col lg:mt-8 ">
            <h1 className="text-pink-500 lg:m-8 lg:text-4xl mt-4 text-3xl">
              Get to know me!
            </h1>
            <div className="lg:m-4 lg:mt-8 mt-4">
              <p className="text-2xl text-gray-100 text-justify m-1 lg:text-1xl font- text-[21px] lg:p-4">
                I'm a FRONTEND WEB DEVELOPER building the Front-end Websites
                and Applications with the help of HTML, CSS, BOOTSTRAP, NEXTJS
                ,REACT ,REDUX ,TAILWIND that leads to the success of the overall
                Product. I'm open to opportunties where i can contribute, learn
                and grow
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <h1 className="text-pink-500 lg:m-4 lg:text-4xl lg:mt-9  text-4xl">
              Skills
            </h1>
            <div className="lg:mt-5 mt-10 ">
              <div className="flex flex-col lg:m-2  ">
                <div className="flex flex-row  ">
                  <div className="btn text-white w-[40%] lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    HTML
                  </div>

                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    CSS
                  </div>

                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    Javascript
                  </div>

                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    React
                  </div>
                </div>
                <div className="flex flex-row mt-4  ">
                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    Redux
                  </div>

                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                    Typescript
                  </div>

                  <div className="btn text-white w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 p-2 border-1 border-pink-500">
                    Tailwind CSS
                  </div>
                </div>
                <div className="btn mt-4 text-white w-[30%]  lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-3 border-1 border-pink-500">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600

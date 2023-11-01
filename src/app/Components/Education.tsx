import React from "react";

function Education() {
  return (
    <div id="education">
    <div className="lg:mt-40 mt-20">
      <h1 className=" text-4xl text-bold lg:text-center font-bold m-4 text-pink-400 ">Education</h1>
      {/* <div
        className="mt-2 h-screen flex m-auto  "
        style={{
          flex: 1,
          height: "4px",
          backgroundColor: "purple",
          width: "3%",
        }}
      ></div> */}
<div className=" lg:flex-row lg:mt-20 m-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-12 mt-10">
       <div className="flex flex-col text-white">
        <h2 className="text-2xl text-gray-100">2021-PRESENT</h2>
        <span className="my-1"></span>
        <p className="text-gray-100">I.E.T. Rohilkhand University,Bareilly</p>
        <span className="my-1"></span>
        <p className="opacity-70 ">Bachelor of Technology in Computer Science & Information Technology</p>
       </div>
       <div className="flex flex-col text-white">
        <h2 className="text-2xl">2020-2021</h2>
        <span className="my-1"></span>
        <p className="">Laxmi Public School, Pandit Deen Dayal  Upadhyaya Nagar(CBSE)-12</p>
        <span className="my-1"></span>
        <p className="opacity-70">Percentage:91%</p>
       </div>
       <div className="flex flex-col text-white">
        <h2 className="text-2xl">2018-2019</h2>
        <span className="my-1"></span>
        <p className="">Laxmi Public School, Pandit Deen Dayal  Upadhyaya Nagar(CBSE)-10</p>
        <span className="my-1"></span>
        <p className="opacity-70">Percentage:91%</p>
       </div>
      </div>
      </div>
     </div>
     </div>
  );
}

export default Education;


// sm:flex sm:flex-col sm:items-center sm:justify-center
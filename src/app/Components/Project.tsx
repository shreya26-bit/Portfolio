import Link from "next/link";
import React from "react";

const projectDetails = [
  {
    id: 1,
    title: "SPENDIFY",
    image:"Images/expensesApp.png",
    des: "Next.js Website",
    github:"https://github.com/shreya26-bit/expense-tracker-me",
    liveDemo:"https://expense-tracker-me.vercel.app/"
  },
  {
    id: 2,
    title: "PORTFOLIO WEBSITE",
    image: "Images/222.png",
    des: "Next.js Website",
    github:"https://github.com/shreya26-bit/Portfolio",
    liveDemo:"https://portfolio-eta-eight-84.vercel.app/",
  },
  {
    id: 3,
    title: "MOVIEFLY",
    image: "Images/2image.png",
    des: "React Website",
    github:"https://github.com/shreya26-bit/e-Cart-App",
    liveDemo:"https://e-cart-app-ebon.vercel.app/"
  },
  {
    id: 4,
    title: "E-Commerece",
    image: "Images/3image.png",
    des: "React Website",
    github:"https://github.com/shreya26-bit/e-Cart-App",
    liveDemo:"https://e-cart-app-ebon.vercel.app/",
  },
  
  {
    id: 6,
    des: "Javascript Website",
    title: "Keep Your Notes",
    image: "Images/4image.png",
    github:"https://github.com/shreya26-bit/Keep-Notes",
    liveDemo:"https://keep-notes-nine.vercel.app/",
  },

  {
    id: 5,
    des:"Pure HTML & CSS",
    title: "FOOD DELIVERY",
    image: "Images/foodDelivery.png",
    github:"",
    liveDemo:"",
  },
 
];

function Project() {
  return (
    <>
      <div id="project">
        <div className="lg:mt-20 mt-20">
          <h1 className=" text-5xl text-bold lg:text-center font-bold m-4 text-pink-400 ">
            Project
          </h1>
      
          <div className="flex flex-col">
            {/* <p className=" hidden lg:block m-1 lg:text-[20px] text-[20px] lg:text-center text-white p-2">
              Here you will find out my projects that I have created by using my
              skills 
            </p> */}
          
            {/* <div className="ABOUTME flex mt-10"></div> */}
          </div>
        </div>

        <div className="container ">
          <div className="grid sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-3 m-18 mx-4">
            {projectDetails.map((details) => {
              return (
                <>
                  <div
                    className="mx-4 mt-8 border-1 border-pink-500 
                 rounded-2xl"
                  >
                    <img
                      className=" rounded-3xl lg:p-4 object-contain"
                      src={details.image}
                      alt=""
                      style={{ height: "18rem" }}
                    />

                    <div
                      className="h-screen border-1   "
                      style={{
                        flex: 1,
                        height: "1px",
                        backgroundColor: "cyan",
                        width: "100%",
                        opacity: "0.2",
                      }}
                    ></div>
                    <h1 className=" lg:text-2xl text-[18px] lg:mt-4 mx-6 text-white mt-6 text-center font-bold">
                      {details.title}
                    </h1>

                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 m-1 text-[18px] font-extrabold text-center">
                      {details.des}
                    </p>

                    <div className="flex flex-row  justify-between mt-2 p-4 font-thin">
                      <Link
                        href={details.github}
                        className="btn text-cyan-500 lg:w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-cyan-600 font-bold lg:m-4 m-1 p-5 border-1 w-[50%] border-pink-500"
                      >
                        Github
                      </Link>
                      <Link
                        href={details.liveDemo}
                        className="btn text-pink-500 lg:w-[40%]   lg:p-4 text-1xl rounded-full text-center  shadow shadow-pink-600 font-bold lg:m-4 m-1 p-5 border-1 w-[50%] border-pink-500"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Project;

{
  /* Note-> flex m-auto keep the div in center  */
}

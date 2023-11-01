// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaHackerrank } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

function ContactForm() {
  const [state, handleSubmit] = useForm("moqobqgy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div className="mt-40">
    <h1 className=" text-4xl text-bold lg:text-center font-bold m-4 text-pink-400 ">
           Contact
          </h1>
      <div className="lg:flex-row lg:mt-20 lg:m-2 m-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-12">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-bold m-2">Let's Connect</h1>
            <div className=" flex mt-2 text-white m-4 ">
          <Link href={"https://github.com/shreya26-bit"}>
            <div className="  hover:text-pink-600 hover:cursor-pointer">
              <AiFillGithub size={29} />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/shreya-singh-4b57a3229/"}>
            <div className="mx-4 hover:text-pink-600 hover:cursor-pointer">
              <BsLinkedin size={29} />
            </div>
            </Link>
            </div>
            
          </div>


          <div className="flex flex-col">
          
            <form onSubmit={handleSubmit}>
             <div className="flex flex-col">
              <label className="text-white" htmlFor="email">
              Your email
              </label>
              <input className="mt-2 rounded-[5px] p-2" id="email" type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              </div>
              <div className="text-white flex flex-col ">
              <label className="text-white mt-9" htmlFor="email">
              Message 
              </label>
              <textarea className="rounded-[5px] p-6" id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              </div>
              {/* <div className="mt-4"> */}
              <button
                className="text-white   lg:w-[100%]   p-3 text-1xl rounded-[8px] text-center  shadow  shadow-pink-600 font-bold m-1 border-1 w-[100%] border-pink-500 mt-6 bg-pink-500"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <label className="text-white" htmlFor="email">
          Email Address
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="text-white"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form> */}
      </div>
    </>
  );
}
function App() {
  return <ContactForm />;
}
export default App;

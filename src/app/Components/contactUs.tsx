import React from "react";

function ContactUs() {
  return (
    <div className="mt-20">
 
      <h1 className=" text-3xl text-bold lg:text-center font-bold m-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 ">Contact Us</h1>
      {/* <div
        className="mt-4 h-screen flex m-auto "
        style={{
          flex: 1,
          height: "4px",
          backgroundColor: "purple",
          width: "2%",
        }}
      ></div> */}
<div className="grid grid-cols-1  mx-12 sm:grid-cols-2">
  <div className="flex flex-col ">
    <h1 className="text-white font-bold text-4xl text-center">
      Contact.
    </h1>
    <p className="text-white font- text-1xl text-center">Get in touch or shoot me an email directly on <span className="font-bold">shreyasingh222602@gmail.com</span></p>

  </div>
</div>
      
    </div>
  );
}

export default ContactUs;

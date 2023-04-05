import React, { useState } from "react";
import logo from "../assets/logo.png";
import Linkedin from "./linkedIn";
import { Link } from "react-router-dom";
import Whatsapp from "./whatsapp";
// export default function Profile({ name, image, description }) {
//   return (
//     <div className="max-w-3xl min-h-screen px-8 py-6 mx-auto my-10 bg-white shadow-xl drop-shadow-2xl rounded-xl ">
//       <img className="absolute right-0 z-10 w-40 h-40 " src={logo} />
//       <h1 className="mb-4 font-sans text-3xl font-bold text-center">{name}</h1>
//       <img className="rounded-xl" src={image} />
//       <p className="py-4 text-xl font-semibold">
//         What does the {name} role consist on?
//       </p>
//       <p className="pb-4 text-lg ">{description}</p>
//       <div className="p-4 text-lg font-semibold text-white rounded-lg bg-violet1">
//         <div className="pb-4">
//           Hope you found this little personality test interesting and that it
//           helped you to analyse which carrer path can suit you. The tech world
//           has a place for everyone of us, feel free to try different things and
//           find your own way into it.
//         </div>
//         <div className="flex justify-between">
//           <p>
//             You can contact me though LinkedIn I'll be happy to hear from you!
//           </p>
//           <Linkedin />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Profile({ name, image, description }) {
  return (
    <div className="flex flex-col items-center m-4 bg-white lg:m-20 rounded-2xl">
      <img className="w-32 h-32 m-4 " src={logo} />
      <div className="flex flex-col mt-6 ">
        <p className="max-w-3xl text-xl font-bold text-center md:text-3xl text-darkblue1">
          According to our experts the role that goes better with your
          personality is:
        </p>
        <h1 className="px-8 py-6 text-2xl font-extrabold text-center md:text-4xl text-pink1">
          {name}
        </h1>
      </div>
      <div className="flex flex-col items-center m-4 xl:flex-row ">
        <img src={image} className="lg:mr-4 w-fit xl:w-1/2 rounded-xl" />
        <div className="mt-6 mb-4 text-lg font-medium lg:mx-6 text-darkblue1">
          {description}
        </div>
      </div>
      <p className="mx-6 text-2xl font-semibold text-center text-darkblue1 ">
        Hope you found this personality test interesting and that it helped you
        with your carrer path.
      </p>
      <p className="mx-6 mb-8 text-2xl font-semibold text-center text-pink1 lg:text-darkblue1 ">
        The tech world has a place for everyone of us, feel free to try
        different things and find your own way into it!
      </p>
      <div className="flex flex-col justify-around w-full mb-4 lg:flex-row">
        <div className="flex items-center justify-center h-full pt-2 m-4 rounded-2xl lg:m-0 bg-gray1">
          <Whatsapp text="darkblue1" />
          <p className="pr-6 text-xl font-bold text-darkblue1">Share Test</p>
        </div>
        <div className="flex flex-col items-center justify-end h-full pt-2 m-4 lg:m-0 bg-pink1 rounded-2xl">
          <Link to="/test">
            <button className="w-full h-full px-2 pt-3 pb-6 text-2xl font-bold text-white ">
              Take the test again!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

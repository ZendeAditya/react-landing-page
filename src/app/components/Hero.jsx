import React from "react";
import Nike from "../../../public/nike.png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <main className="flex items-center flex-col md:flex-row justify-evenly md:min-h-screen">
        <div className=" p-3 md:w-[50rem]">
          <h2 className="text-3xl text-center uppercase font-bold text-red-500 md:text-6xl">
            Youre feet deserve the best
          </h2>
          <p className="text-md p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptates ipsa iure, dolorem consequatur impedit nulla non
            inventore veniam nihil deserunt, voluptate, eius consectetur odit
            quae amet sit excepturi laborum.
          </p>
          <div className="p-3">
            <button className="py-2 p-5 rounded shadow-md m-3 bg-green-300">
              Shop Now
            </button>
            <button className="py-2 p-5 rounded shadow-md m-3 bg-pink-300">
              Add To Whislist
            </button>
          </div>
        </div>
        <div>
          <Image src={Nike} alt="nike shoe" className="drop-shadow-2xl" />
        </div>
      </main>
    </>
  );
};

export default Hero;

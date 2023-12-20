import React from "react";
import heroData from "@/assets/Data.json";
import profilePhoto from "@/assets/photo.jpeg";
import Image from "next/image";

function HeroSection() {
  let data = heroData.hero;
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl py-32  sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <a className="block relative h-48 rounded-lg overflow-hidden">
              <Image
                alt="ecommerce"
                src={profilePhoto}
                className="object-cover object-center w-full h-full block"
              />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 text-xl leading-8 text-gray-500">
            Hello, I am {data.name}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-gray-300 sm:text-6xl">
            {data.designation}
          </h3>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

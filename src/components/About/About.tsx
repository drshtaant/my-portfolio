import React from 'react'
import heroData from "@/assets/Data.json"
import profilePhoto from "@/assets/photo.jpeg";
import Image from "next/image";

function About() {
  let data = heroData.hero

  return (
 <section className="text-gray-400 bg-gray-800 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{data.description}
        {/* <br className="hidden lg:inline-block" /> */}
      </h1>
      <p className="mb-8 leading-relaxed">{data.about}</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gray-500  border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">More</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Resume</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <Image
                alt="ecommerce"
                src={profilePhoto}
                className="object-cover object-center rounded"
              />
    </div>
  </div>
</section>
  )
}

export default About
import React from 'react'
import skillsData from "@/assets/Data.json"

function Skills() {
   let data = skillsData.skills
  return (
<section className="text-gray-400 body-font bg-gray-800">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Skills</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">{data.desc}</p>
    </div>
    <div className="flex flex-wrap -m-2">
       {data.skillList.map((skills) => {
    return ( 
      // eslint-disable-next-line react/jsx-key
      <div className="xl:w-1/12 w md:w-1/3 p-2 w">
        <div className="border border-gray-600 border-opacity-75 p-2 rounded-lg">
          <h2 className="text-sm text-white font-medium title-font">{skills}</h2>
        </div>
      </div>
    );
  })}
    </div>

  </div>
</section>
  )
}

export default Skills
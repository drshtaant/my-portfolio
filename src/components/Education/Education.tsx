import React from 'react'
import educationData from "@/assets/Data.json"

function Education() {
   let data = educationData.education
  return (
<section className="text-gray-400 bg-gray-800 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Education</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">{data.description}</p>

      <div className="-my-8 divide-y-2 divide-gray-800 mt-11">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white">{data.degree}</span>
          <span className="mt-1 text-gray-500 text-sm">{data.graduated}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">{data.school}</h2>
          {/* <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p> */}
          {/* <a className="text-indigo-400 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
    </div>
    
  </div>
</section>



  )
}

export default Education
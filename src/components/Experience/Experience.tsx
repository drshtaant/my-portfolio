import React, {useState} from 'react';
import experienceData from "@/assets/Data.json"

function Experience( ) {
    let experience = experienceData.experience
  
  const titleData = experienceData.hero.experienceMessage
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

 const toggleExpand = (index: number) => {
  setExpanded((prevExpanded) => ({
    ...prevExpanded,
    [index]: !prevExpanded[index],
  }));
};
  return (
    <section className="text-gray-400 bg-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {experience.map((exp, index) => (
          <div key={index} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              {/* <div className="flex-shrink-0 w-24 h-24 bg-gray-700 text-indigo-400 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div> */}
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-xl">{exp.title}</h2>
                <p  className="leading-relaxed"> {expanded[index] ? exp.description : `${exp.description.substring(0, 250)}`}</p>
                <button
                    className="text-indigo-500 inline-flex items-center mt-4"
                    onClick={() => toggleExpand(index)}
                  >
                    {expanded[index] ? 'Show Less' : 'Show More'}
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

import { projects } from "../constants";

import React from 'react';
import { FaChevronRight } from "react-icons/fa";
const ProjectSection = () => {
return (
  <section id="work" className="text-center py-40 px-8 bg-main-blue">
      <h2
      className="max-w-90 mt-0 mr-auto mb-24 ml-auto border-b-4 border-gray-200 text-4xl text-white"
      >These are my some of projects</h2>
      <div className="grid gap-[4rem] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project)=>(
          <a className="group" href={project.href} target="_blank">
            <img className="w-full h-[calc(100%-6.8rem)] object-cover"src={typeof project.imgSrc === 'string' ? project.imgSrc : project.imgSrc.src} />
            <p className="text-main-white text-2xl bg-main-gray">
              {console.log(project.imgSrc)}
              <span className="text-main-gray transition-colors duration-300 ease-out group-hover:text-orange-400  ">&lt;</span>
              {project.title}
              <span 
                className="text-main-gray transition-colors duration-300 ease-out group-hover:text-orange-400"> &#47; &gt;</span></p>
          </a>
        ))}
      </div>
      <a 
        class="bg-main-gray hover:bg-main-red text-main-white rounded px-2 py-1 inline-flex items-center group"
      >Show all <FaChevronRight className="transition-transform ease-out duration-500 group-hover:translate-x-1" /></a>
  </section>
);
}

export default ProjectSection;

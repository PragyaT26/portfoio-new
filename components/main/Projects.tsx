import React from "react";
import ProjectCard from "../sub/ProjectCard";


interface Project {
  src: string;
  link: string;
  title: string;
  description: string;
}

const Projects = () => {

  const projectList:Project[] = [
    {
      src:"mysnaphub.png",
      link:"https://mysnaphub.com/abs-9-v1",
      title:"Affiliate Business System ",
      description:"UX/UI Product Design|Designed in Figma Build on estage"
    },
    {
      src:"snaphub.png",
      link:"https://snaphub.in",
      title:"Comapny Website",
      description:"UX/UI Product Design | Designed in Figma Build on estage"
    },
   {
      src:"snaphub2.png",
      link:"https://mysnaphub.com/",
      title:"Comapny Website 2",
      description:"UX/UI Product Design | Designed in Figma Build on estage "
    },
  {
      src:"artstation.png",
      link:"https://www.artstation.com/pragya7",
      title:"3D Models",
      description:"3D modals made in Blender "
    },
  {
      src:"ecommerce.png",
      link:"https://master--superlative-gumdrop-86878f.netlify.app/",
      title:"E-commerce Website",
      description:"Website made with React, Node, Express And Bootstrap"
    },
    {
      src:"netflix-clone.png",
      link:"https://netflix-clone-pragya26.netlify.app/",
      title:"Netflix Clone",
      description:"Website made with React, Firebase and Tailwind CSS"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
      {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            src={`/${project.src}`}
            title={project.title}
            description={project.description}
            link={project.link} // Pass link as a prop if the ProjectCard handles it internally
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
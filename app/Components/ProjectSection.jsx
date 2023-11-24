"use client";
import React,{ useState , useRef } from 'react'
import ProjectCard from './ProjectCard'
import Projecttags from './Projecttags'
import { motion, useInView } from "framer-motion";

const projectdata = [
    {
        id:1,
        title: "Figma design for LV Website",
        description: "Designing a Leave Management Website using Figma software",
        image: "images/projects/P0.png",
        tag: ["All","Design"],
        gitUrl: "",
        previewUrl: "/"
    },
    {
        id:2,
        title: "React Routing Test Website",
        description: "This is Only a React Routing test including 404 custom pages",
        image: "images/projects/P2.png",
        tag: ["All","Web"],
        gitUrl: "",
        previewUrl: "/"
    },
    /*{
        id:3,
        title: "React Very simple to-do-list Website",
        description: "This is where i started react where you can add or remove tasks that you want to do later on",
        image: "images/projects/P1.png",
        tag: ["All","Web"],
        gitUrl: "",
        previewUrl: "/"
    }, */
    
]

const ProjectSection = () => {
    const [tag,settag] = useState("All")
    const ref = useRef(null);
    const isInView = useInView(ref,{ once: true});

    const handletagchange = (newtag) => {
        settag(newtag);
    }

    const filteredProjects = projectdata.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };


  return (
    <section id="projects" name="projects" className='mt-20'>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
         <Projecttags onClick={handletagchange} 
         name="All" 
         isSelected={tag === "All"} />
         <Projecttags onClick={handletagchange} 
         name="Web" 
         isSelected={tag === "Web"} />
         <Projecttags onClick={handletagchange} 
         name="Design" 
         isSelected={tag === "Design"} />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => 
        <motion.li key={index} 
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4 }}>
    <ProjectCard 
    key={project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
    />
    </motion.li>)} 
    </ul>
    </section>
  )
}

export default ProjectSection

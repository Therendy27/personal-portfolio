"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "React Tic Tac Toe",
      description: " My react tic tac toe game is a classic board game where two players take turns marking X's and O's on a 3x3 grid. The objective is to get three of your marks in a row, either horizontally, vertically, or diagonally, before your opponent does. The game is played on a user-friendly interface with interactive features that allow players to easily make their moves and keep track of the score.",
      image: "/images/projects/React-TicTacToe.png",
      tag: ["All", "web dev"],
      gitUrl: "/",
      previewUrl: "/",

    },
    {
      id: 2,
      title: "React Trivia Game",
      description: "The React-Trivia Game with 20 questions is a fun and interactive way to test your knowledge of data structures. With a variety of questions ranging from linked lists to binary trees, this game will challenge your understanding and help you strengthen your grasp on these fundamental concepts. ",
      image: "/images/projects/React-Trivia.png",
      tag: ["All", "web dev"],
      gitUrl: "/",
      previewUrl: "/",
   
    },
    {
      id: 3,
      title: "Travel Website Design",
      description: "Learn how to build a feature-rich travel application with Next.js 14 and Tailwind CSS, including everything from mobile-first design principles to a sleek user interface",
      image: "/images/projects/travel.png",
      tag: ["All", "web design"],
      gitUrl: "/",
      previewUrl: "/",
     
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/2.png",
      tag: ["All", "web dev"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/2.png",
      tag: ["All", "web design"],
      gitUrl: "/",
      previewUrl: "/",

      
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/2.png",
      tag: ["All", "web dev"],
      gitUrl: "/",
      previewUrl: "/",
     
    },
  ];

const ProjectsSection = () => {
    const [tag,setTag]= useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) =>{
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
    );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="projects">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
     </h2>
     <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
           onClick={handleTagChange} 
           name="All"
           isSelected={tag === "All"}
        />
        <ProjectTag 
           onClick={handleTagChange} 
           name="web dev"
           isSelected={tag === "web dev"}
        />
          <ProjectTag 
           onClick={handleTagChange} 
           name="web design"
           isSelected={tag === "web design"}
        />
     </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-8'>
        {filteredProjects.map((project,index) => (
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
        <ProjectCard 
        key={project.id}
        title={project.title}
        description={project.description} 
        imgUrl={project.image}
        tags={project}
        gitUrl={project.gitUrl}
        previewUrl={(project.previewUrl)}
         />
          </motion.li>
        ))}
        </ul>
    
    </section>
  )
}

export default ProjectsSection
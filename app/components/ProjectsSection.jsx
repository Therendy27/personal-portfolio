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
      gitUrl: "https://github.com/Therendy27/tictactoe",
      previewUrl: "https://tictactoe-nu-five.vercel.app/",

    },
    {
      id: 2,
      title: "React Trivia Game",
      description: "The React-Trivia Game with 20 questions is a fun and interactive way to test your knowledge of data structures. With a variety of questions ranging from linked lists to binary trees, this game will challenge your understanding and help you strengthen your grasp on these fundamental concepts. ",
      image: "/images/projects/React-Trivia.png",
      tag: ["All", "web dev"],
      gitUrl: "https://github.com/Therendy27/react-trivia/tree/main/react-app",
      previewUrl: "https://re-trivia.vercel.app/",
   
    },
    {
      id: 3,
      title: "Travel Website Design",
      description: "Learn how to build a feature-rich travel application with Next.js 14 and Tailwind CSS, including everything from mobile-first design principles to a sleek user interface",
      image: "/images/projects/travel.png",
      tag: ["All", "web design"],
      gitUrl: "/",
      previewUrl: "https://travel-eight-ecru.vercel.app/",
     
    },
    {
      id: 4,
      title: "Personal Porfolio Project",
      description: "This personal portfolio project showcases the work and skills of a web developer. Key sections include: Header: Logo (TS) with links to About, Projects, and Contact pages.Introduction: A welcome message, a brief overview of skills (HTML, CSS, JavaScript), a profile picture, and call-to-action buttons.About Me: A detailed description of the developers expertise and passion for web development, along with a list of technical skills (React, Node.js, MongoDB, MySQL, HTML/CSS, Python, JavaScript/TypeScript).",
      image: "/images/projects/portfolio-1.png",
      tag: ["All", "web dev"],
      gitUrl: "",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "CRUD project",
      description: "A CRUD application allows users to manage data. In this web application. Create: Users can add new tasks using a form. The Create button likely opens this form. Read: Displays a list of tasks from the database. The search bar helps filter tasks, and the table shows task details like title, description, and creation date. Update: Users can modify existing tasks. The Edit button next to each task likely opens a form to update task details.Delete: Users can remove tasks. The Delete  button next to each task removes it from the database.",
      image: "/images/projects/crud.png",
      tag: ["All", "web dev"],
      gitUrl: "/https://github.com/Therendy27/task-manager",
      previewUrl: "https://task-manager-1jxpdcyo3-therendy-suffrens-projects.vercel.app/",

      
    },
    {
      id: 6,
      title: "Travel Agency Figma App",
      description: "Figma layout is for a travel website, Discover Mountain. It includes: Header: Logo and navigation links (Activities, Testimonials, Destinations).Hero Section: Background mountain image, title Explore The World,and a search bar. Activities Section: Lists activities offered (e.g., Hiking, Cycling) with images and descriptions.Testimonials Section: Client testimonial with a quote and a small profile picture.Luxury Destination Section: Grid of images showcasing luxury travel destinations. Newsletter Signup: Signup form for the newsletter with a background image of mountains.",
      image: "/images/projects/figma-1.png",
      tag: ["All", "web design"],
      gitUrl: "" ,
      previewUrl: "https://www.figma.com/proto/FXJKvkSVqP7fhicxxb4X8C/Travel-Website?page-id=17%3A200&node-id=17-331&viewport=670%2C-1715%2C0.12&t=vyzR9D4B613S3iF8-1&scaling=min-zoom&content-scaling=fixed",
     
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
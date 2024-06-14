"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Node.js</li>
                <li>Mongdb</li>
                <li>MySQL</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>Javascript/TypeScript</li>
               
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Kean University</li>
                <li>Southern New Hampshire University</li>   
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certification",
        content:(
            <ul className='list-disc pl-2'>
                <li>Web Development Fundamentals</li>
                <li>Front-End </li>   
                 <li>Front-End Web UI Framework, Bootstrap</li>
                <li>Front End JavaScript Library, React</li>
            </ul>
        ),
    }
]
const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        
        <Image src="/images/about-me.jpeg" width={900} height={900}/> 
    
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-10'>About Me</h2>
       
           <p className='text-base lg:text-sm'>
           A passionate full-stack web developer, I create dynamic and user-friendly websites.
            Using both front-end and back-end development skills, I strive to create innovative and 
            visually appealing web applications. Also have a keen eye for UX/UI. Well-designed websites 
            not only look good, but also enhance user experience with intuitive navigation and engaging 
            interfaces. With my technical expertise and passion for design, I create aesthetically 
            pleasing and functional web applications. I'm committed to delivering high-quality solutions 
            that meet the needs of clients and users by continuously expanding my skills and staying up-to-date
             with the latest technologies. 
            </p>
          
            <div className='flex flex-row justify-start mt-8'>
                <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab==="skills"}
                >
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab==="education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("certification")} 
                    active={tab==="certification"}
                >
                    {" "}
                    Certification{" "}
                </TabButton>
            </div>
             {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
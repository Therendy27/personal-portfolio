"use client";
import React from 'react'
import GithubIcon from "/Users/therendysuffren/Desktop/Web_projects/portfolio-website/public/github-icon.svg"
import LinkedInIcon from "/Users/therendysuffren/Desktop/Web_projects/portfolio-website/public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';
import { useState,useEffect } from 'react';


const EmailSection = () => {
    const [state, handleSubmit] = useForm("xnqeeyop");
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message:'',
        // Add more fields as needed
      });
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
        if (state.succeeded) {
          setShowPopup(true);
          setFormData({
            email: '',
            subject: '',
            message:'',
            // Reset other fields as needed
          });
        }
      }, [state.succeeded]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };
  return (

    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
            Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to
            you!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com/Therendy27">
              <Image src={GithubIcon} alt="Github Icon"/>
            </Link>
            <Link href="https://www.linkedin.com/in/therendysuffren97/">
                <Image src={LinkedInIcon} alt="linkedin Icon"/>
            </Link>
        </div>
    </div>
    <div>
        <form className='flex flex-col 'onSubmit={handleSubmit} >
        <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
                value={formData.email}
                onChange={handleInputChange}
            
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                value={formData.subject}
                onChange={handleInputChange}
              />
             
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                value={formData.message}
                onChange={handleInputChange}
              />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={state.submitting}
            >
              Send Message
            </button>
        </form>
        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#121212] p-6 rounded shadow-lg text-center">
            <p className='text-white'>Thanks for the connecting!</p>
            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </section>

  )
}

export default EmailSection
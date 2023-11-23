"use client";
import React, { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kecv3hj', 'template_ys4l01b', form.current, 'IUlLms7VhTVDu5cOQ')
          .then((result) => {
              console.log(result.text);
              setemailsub(true)
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

      const [emailsub,setemailsub] = useState(false);

  return (
    <section name="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>  
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I'm currently looking for new opportunities, my inbox is always open.
            I'm open to collaboration with organizations that 
            value innovation.If you have internship openings, a question
            or juste want to say hi, I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/ayebmoh">
                    <Image alt='git' src={GithubIcon} />
                </Link>
                <Link href="https://www.linkedin.com/in/mohamed-ayeb-43bb0826b/">
                    <Image alt='linkedin' src={LinkedinIcon} />
                </Link>
            </div>
        </div>
        <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Banana@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name='subject'
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name='message'
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-500 via-purple-600  hover:bg-slate-200 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
             { emailsub && (
                <p className="text-green-500 text-sm mt-2">email sent successfully!</p>)
            }
          </div>
        </form>
      </div>
    </section>
  )
}

export default EmailSection

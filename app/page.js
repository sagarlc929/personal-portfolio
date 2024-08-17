"use client";
import { Nav, WelcomeSection, ProjectsSection, ContactSection, Footer } from "./components";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useState, useEffect} from 'react';

import React from "react";

const isBrowser = () => typeof window !== 'undefined';

const scrollToTop = () =>{
  if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementById('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        // Show button when the top of the footer is within the viewport
        // setIsVisible(footerTop <= viewportHeight);
        if(viewportHeight>=footerTop){

        setIsVisible(true);
        }
        else{

          setIsVisible(false);
        }
      }
    // Show the button when the user scrolls down
    /*
    if (window.scrollY > 3500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
      */
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Nav />
      <WelcomeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    <button
        className={`fixed bottom-0 right-0 border-2 border-main-red  text-main-gray bg-main-white rounded-full p-[1rem] mx-10 my-[6rem] z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}`} //.scrollToTopButton.visible {
         onClick={scrollToTop}
      >
        <IoIosArrowRoundUp className="inline-block h-[2rem] w-[2rem]" />
      </button>
    </>
  );
}

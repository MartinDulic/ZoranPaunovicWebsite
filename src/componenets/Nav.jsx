import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { links } from "../data/navLinks.js"
import SdpLogoWhite from "../assets/images/SdpLogoWhite.webp"
import SdpLogoRed from "../assets/images/SdpLogoRed.webp"
import SocialIcons from "./SocialIcons.jsx"

const Nav = () => {
  const [navRef, navInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [navInView, hasAnimated]);

  // **NEW: Handle smooth scroll with navbar offset**
  const handleSmoothScroll = (e, to) => {
    e.preventDefault();
    setIsSidebarOpen(false); // Close sidebar if open

    const targetElement = document.querySelector(to);
    if (targetElement) {
      const navbarHeight = 63; // Your navbar is h-16 (4rem = 64px)
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

// In your Nav component, update the link generation:
const linkItemsNavbar = links.map((link, index) => {
  return (
    <a 
      key={index} 
      href={`#${link.to.substring(1)}`}  // Add hash prefix
      onClick={(e) => handleSmoothScroll(e, link.to)}
      className={`text-lg font-frutiger font-bold cursor-pointer hover:text-primary hover:text-shadow-none transition-opacity ${isScrolled ? 'text-secondary' : 'text-white text-shadow-sm'}`}
    >
      {link.text}
    </a>
  );
});

const linkItemsSidebar = links.map((link, index) => {
  return (
    <a 
      key={index} 
      href={`#${link.to.substring(1)}`}  // Add hash prefix
      onClick={(e) => handleSmoothScroll(e, link.to)}
      className='text-lg font-frutiger font-bold border-b-2 w-full pb-2 hover:text-primary'
    >
      {link.text}
    </a>
  );
});



  return (
    <>
      {/* Navbar */}
      <section
        ref={navRef} 
        className={`z-10 fixed top-0 h-16 w-screen flex items-center justify-between font-frutiger transition-all duration-1000 ease-out ${
            navInView
              ? 'opacity-100'
              : 'opacity-0'
          } ${
            isScrolled ? 'bg-white shadow-md -mt-px' : 'bg-transparent'
          }`}
        style={{
          transitionDelay: hasAnimated ? "0ms" : "1200ms"
        }}
      >
        
        <div className='flex'>
          <img src={isScrolled ? SdpLogoRed : SdpLogoWhite} alt="Spd Logo" className='h-8 pl-4 mr-8' />
          <div className={`hidden md:flex items-center justify-center gap-4 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            <SocialIcons/>
          </div>
        </div>
        <div className='hidden md:flex gap-4 mr-8'>
          {linkItemsNavbar}
        </div>
        <RiMenu3Line 
          onClick={() => setIsSidebarOpen(true)} 
          className={`md:hidden text-3xl mr-4 cursor-pointer hover:opacity-80 transition-opacity ${
            isScrolled ? 'text-secondary' : 'text-white'
          }`}
        />
      </section>
      
      {/* Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <section 
        className={`md:hidden fixed z-30 right-0 h-screen w-80 bg-white transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <IoMdClose 
          onClick={() => setIsSidebarOpen(false)} 
          className='text-textSecondary text-3xl absolute right-4 top-4 cursor-pointer hover:opacity-80 transition-opacity' 
        />
        <div className='flex flex-col text-secondary items-start gap-6 mt-20 mx-8'>{linkItemsSidebar}</div>
        <div className='m-8 flex gap-4'>
          <SocialIcons/>
        </div>
      </section>
    </>
  );
}

export default Nav;
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const navItems = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Team", href: "#team" },
  { name: "Testimonial", href: "#testimonial" },
];

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);
        const[activeItem, setActiveItems] = useState();


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClick = (name) => {
        setActiveItems(name);
        setIsOpen(false);
    }

    // useEffect(() => {
    //   const sections = menuIte
    // }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          {/* logo */}
          <div>
            <a href="/">
              <img src="/logo.png" alt="" className="h-8" />
            </a>
          </div>

          {/* nav items for large device */}
          <div className="space-x-8 hidden md:flex items-center">
            {navItems.map((item, index) => (
              <a onClick={()=>handleMenuClick(item.name)} key={index} href={item.href} className={`text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300  ${activeItem === item.name ? 'bg-primary text-black underline outline-offset-4' : ''}`}>
                {item.name}
              </a>
            ))}
            <a href="#contact" className="border px-4 py-2 border-black hover:bg-primary rounded-md">Request a quote</a> 
          </div>

          {/* mbl device menu open/close */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none">
                {
                    isOpen ?  <MdOutlineClose className="size-6" /> :  <HiOutlineMenuAlt3 className="size-6" />
                }
            </button>
          </div>

        </div>

      </div>

      {/* Mobile menu */}
      {
        isOpen && (
            <div className="md:hidden bg-white shadow-md">
                <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
                    {navItems.map((item, index) => (
                        <a onClick={()=>handleMenuClick(item.name)} key={index} href={item.href} className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? 'text-primary' : ''}`}>
                            {item.name}
                        </a>
                    ))}
                    <a href="#contact" className="block border px-4 py-2 border-black hover:bg-primary rounded-md">Request a quote</a> 
                </div>
            </div>
        )
      }
    </nav>
  );
};

export default Navbar;

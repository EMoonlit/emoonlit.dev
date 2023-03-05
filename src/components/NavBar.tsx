
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]

    return (
        <nav className="flex justify-between items-center w-full h-20 px-4 text-gray-300 bg-black fixed z-10">
          <div>
            <h1 className="text-4xl font-bold ml-2">EMoonlit</h1>
          </div>
    
          <ul className="hidden md:flex">
            {links.map(({id, link}) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <NavLink
                    className={link} 
                    to={link} 
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
    
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <NavLink
                    onClick={() => setNav(!nav)}
                    to={link}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      );
    };

export default NavBar
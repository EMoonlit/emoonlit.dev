
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
        <nav className="fixed z-10 flex h-20 w-full items-center justify-between bg-black px-4 text-gray-300">
          <div>
            <h1 className="ml-2 text-4xl font-bold">EMoonlit</h1>
          </div>
    
          <ul className="hidden md:flex">
            {links.map(({id, link}) => (
              <li
                key={id}
                className="cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105"
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
            className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {nav && (
            <ul className="
              absolute
              top-0
              left-0
              flex
              h-screen
              w-full
              flex-col
              items-center
              justify-center
              bg-gradient-to-b
              from-black
              to-gray-800
              text-gray-500"
            >
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="cursor-pointer px-4 py-6 text-auto capitalize"
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
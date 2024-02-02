import React from "react";
import { useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

import {Modal,ModalBody,useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const Navbar = () => {

    const links=[
        {
            name : "Home",
            path : "/Home",
            icon : <FaHome className="icon" />

        },
        {
            name : "Recipes",
            path : "/Recipes",
            icon :<IoFastFood className="icon" />
        },

    ]
    const { isOpen, onOpen, onClose } = useDisclosure()

    //toggle for dark theme
    const [theme, setTheme] = useState("light-theme");
   
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  
    const changeTheme = () => {
      if (theme === "dark-theme") {
        setTheme("light-theme");
      } else {
        setTheme("dark-theme");
      }
    };
  return (
    <main>
      <div className="navbar">
        <Link to="/Home" className="logo">
          Recipe <span>Hub</span>
        </Link>
        <nav className="links">
          {links.map((link)=> (
             <Link to={link.path} key={link.name}>{link.name}</Link>
          ))}
          <span className="darktheme" onClick={()=>changeTheme()}>
          <MdDarkMode />
          </span>
         

        </nav>
        <div className="sidebar-btn">
          <GiHamburgerMenu onClick={onOpen} />
        </div>
        <Modal isOpen={isOpen}>
              <ModalBody>
              <Sidebar links={links} onClose={onClose} />
              </ModalBody>
        </Modal>
      </div>

    </main>
    
  );
};

export default Navbar;

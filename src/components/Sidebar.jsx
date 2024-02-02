import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";





const Sidebar = ({links,onClose}) => {
  return (
   <main className='sidebar-container'>
    <div className='sidebar'>
      {links.map((link) => (
        <Link to={link.path} href="#" className='sidebar-links' key={link.name}>{link.icon}{link.name}</Link>
      ))}
         <ImCancelCircle onClick={onClose} className='cancel-icon' />
    </div>
   </main>
  )
}

export default Sidebar
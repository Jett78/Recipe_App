import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";


const Chefcard = ({chef}) => {
  return (
    <main>
        <div className='chef-container'>
         <div className='chef-img'>
          <img src="images/avg.png" alt="chef-img" />
         </div>
         <div className='chef-text'>
            <h3 className='chef-name'>{chef.name}</h3>
            <p className='recipe'>Recipes : {chef.recipes}</p>
            <p className='cuisines'> Cuisines : {chef.cuisines}</p>
            <div className='chef-icons'>
            <FaFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <FaTwitter className='icon'/>

            </div>
         </div>
        </div>
    </main>
  )
}

export default Chefcard
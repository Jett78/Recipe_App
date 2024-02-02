import React from 'react'
import Chefcard from './Chefcard'

const Chefs = () => {
    const chefs=[
        {
            name : "John Cena",
            img : "images/avg.png",
            recipes : "10",
            cuisines : "Mexican"
        },
        {
            name : "Batista",
            img : "images/avg.png",
            recipes : "25",
            cuisines : "American"
        },
        {
            name : "Seth Rollins",
            img : "images/avg.png",
            recipes : "13",
            cuisines : "Italian"
        },
        {
            name : "Roman Reigns",
            img : "images/avg.png",
            recipes : "15",
            cuisines : "Nepalese"
        },
        {
            name : "Brock Lesnar",
            img : "images/avg.png",
            recipes : "9",
            cuisines : "Chinese"
        },
        {
            name : "Edge",
            img : "images/avg.png",
            recipes : "19",
            cuisines : "Indian"
        }
    ]
  return (
   <main>
    <div className='chefs'>
        <h1>Our Top Chefs</h1>
        <div className='chef-grids'>
       {chefs.map((chef) => (
        <Chefcard key={chef.name} chef={chef} />
       ))}
       </div>
    </div>
   </main>
  )
}

export default Chefs
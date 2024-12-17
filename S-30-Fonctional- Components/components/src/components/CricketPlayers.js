import React from 'react'

function CricketPlayers(props) {
  return (
    <div className='mainContainer'>
    <img src={props.picURL} alt='' className='playerPic'></img>
   
<h1>{props.name}</h1>
<h3>Team:{props.team}</h3>
<h3>Role:{props.role}</h3>

  </div>

    
  )
}

export default CricketPlayers


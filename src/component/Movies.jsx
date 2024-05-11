import React from 'react'
import "./movies.css"
import { GrCheckmark } from "react-icons/gr";
import Nav from "./Nav"
import Card from './Card';

const Movies = () => {
  return (
    <>
    <Nav/>
   <center>
    
      
      <div id='pr'>
        <h1>choose your plan</h1>
        <p><GrCheckmark color='red'/>No commitments, cancel anytime</p>
        <p><GrCheckmark color='red'/>verything on Netflix for one low price </p>
        <p><GrCheckmark color='red'/>No ads and no extra fees. Ever</p>
        <button id='next'>Next</button>

      </div>
        
    
    </center>
    <Card/>
    </>
  )
}

export default Movies
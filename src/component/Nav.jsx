// import React from 'react'
// import logo1 from "../resources/logo1.jpg"
// import { TbLanguageHiragana } from "react-icons/tb";
// import { Link } from 'react-router-dom';
// import "./nav.css"
// const Nav = () => {
//   return (
//     <>
//     <nav>
//         <img src={logo1} alt=""  height={105} width={200}/>
//         <div id='menue'>
//         <span><TbLanguageHiragana size={22} color='white' style={{position:"relative",left:"80px",top:"7px"}}/></span>
//         <select name="" id="language">
           
//                 <option value="English">English</option>
//                 <option value="Kannada">Kannada</option>
//             </select>
//         <Link to={"/login"}><button id="login">Signin</button></Link>
//         <Link to={"/ch"}><button id="ch">JoinNetflix</button></Link>
            
//         </div>
//     </nav>
    
//     </>
   
    
//   )
// }

// export default Nav
import React from 'react'
import logo1 from "../resources/logo1.jpg"
import { TbLanguageHiragana } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "./nav.css"
const Nav = () => {
  return (
    <>
    <nav>
        <img src={logo1} alt=""  height={105} width={200}/>
        <div id='menue'>
        <span><TbLanguageHiragana size={22} color='white' style={{position:"relative",left:"80px",top:"7px"}}/></span>
        <select name="" id="language">
           
                <option value="English">English</option>
                <option value="Kannada">Kannada</option>
            </select>
        <Link to={"/login"}><button id="login">Signin</button></Link>
        <Link to={"/joinus"}><button id="ch">JoinNetflix</button></Link>
            
        </div>
    </nav>
    
    </>
   
    
  )
}

export default Nav
// import React from 'react'
// import "./index.css"
// import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
// import Home from "./component/Home"
// import SignIn from './component/SignIn'
// import Movies from './component/Movies'

// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<SignIn/>}/>
//         <Route path='/ch' element={<Movies/>}/>
//        </Routes>
//     </Router>
//     {/* <SignIn/> */}
     
    
//     </>
    
//   )
// }

// export default App
import React from 'react'
import "./index.css"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from "./component/Home"
import SignIn from './component/SignIn'
import Movies from './component/Movies'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/joinus' element={<Movies/>}/>
       </Routes>
    </Router>
    {/* <SignIn/> */}
     
    
    </>
    
  )
}

export default App
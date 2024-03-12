import React from 'react';
import './App.css'
import Products from './components/class-based components/filter/countinc';
import Mounting from './components/class-based components/lifecycle/mountingphase';
import Navigation from './navigation/navigation';
import Circle from './components/class-based components/circle/circle';
import FetchEx from './components/functional-componenets/hooks/customhook/some';
// import Mounting from './components/class-based components/lifecycle/mountingphase';





function App(){
  return(
    <div>
   {/* <h1>hello</h1> */}
   {/* <Products/> */}
   {/* <Mounting/> */}
   {/* <Navigation/> */}
   {/* <Circle/> */}
   <FetchEx/>
            </div>
  )
}
export default App;

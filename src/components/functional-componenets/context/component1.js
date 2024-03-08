
import React, { useState } from 'react'
import Component2 from './component2'

const Component1 = () => {
    const[name,setname]=useState("sangeetha")
  return (
    <> <Component2 name={name}/></>
   
  )
}
export default Component1

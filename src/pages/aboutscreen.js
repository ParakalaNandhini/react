import { useContext } from "react"
import Component1 from "../components/functional-componenets/context/component1"
import Header from "../components/functional-componenets/navBar/header"
import { UserDetails } from "../navigation/navigation"
import UseMemoExample1 from "../components/functional-componenets/hooks/useMemo/useMemoEx1"
import UseEffectEx4 from "../components/functional-componenets/hooks/useEffect/useEffectEx4"
import useCounter from "../components/functional-componenets/hooks/customhook/usecounter"




const AboutScreen=()=>{
   const[count,setCount] =useCounter()
   let globalinfo= useContext(UserDetails)
   console.log(globalinfo)
   const changename=()=>{
        globalinfo.changeName()
   }
   const increment=()=>{
    globalinfo.increment()
   }
    return(
        <>
        <Header/>
        <h2>AboutScreen</h2>
        <h3>I am from navigation.js.globalinfo ---{globalinfo.username}</h3>
        <button onClick={changename}>Change name</button>
        <h4>{globalinfo.counter}---i can be changed from here also</h4>
        <button onClick={increment}>Increment</button>
        <Component1/>
        <UseMemoExample1/>
        <UseEffectEx4/>
        <h1>{count}</h1>
        <button onClick={setCount}>Increment</button>

        </>
    )
}
export default AboutScreen
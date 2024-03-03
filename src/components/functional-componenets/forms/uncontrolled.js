import { useRef } from "react"



const Uncontrolled=()=>{
    const usernameRef=useRef(null)
    const passwordRef=useRef(null)
   
    const handleSubmit=(event)=>{
        event.preventDefault()
        const username=usernameRef.current.value
        const password=passwordRef.current.value
        if(username.length>5){
            alert("enter less than 5 characters")
        }
    }
    return(
        <>
        <h1>Uncontrolled component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" ref={usernameRef}/>
            <input type="password" name="password" ref={passwordRef}/>
            <input type="submit"/>
        </form>
        </>
    )
}
export default Uncontrolled
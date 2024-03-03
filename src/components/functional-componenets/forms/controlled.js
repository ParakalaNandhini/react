import { useState } from "react"



const Controlled=()=>{
    const[username,setUsername]=useState("")
    const[password,setpassword]=useState("")
    const[usernameError,setUsernameError]=useState(null)



    const usernameHandler=(event)=>{
        let usernameInput=event.target.value
        setUsername(usernameInput)
        if(usernameInput.length>5){
            showError()
        }
        else{
            setUsernameError(null)
        }

    }
    const passwordHandler=(event)=>{
        let passwordInput=event.target.value
        setUsername(passwordInput)
        if(passwordInput.length>5){
            showError()
        }
        else{
            setUsernameError(null)
        }

    }
    const showError=()=>{
        setUsernameError("username must be 5 characters")
    }
    return(
        <>
        <h1>Controlled components</h1>
        <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={username}
      onChange={usernameHandler}
      style={{border:usernameError?"2px solid red":"0"}}
    />
    {
        usernameError&&

        <span style={{color:"red"}}>{usernameError}</span>
      
    }
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      value={password}
      onChange={passwordHandler}
    />
  </div>
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default Controlled
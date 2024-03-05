import { Link } from "react-router-dom"


const Header=()=>{
    const linkstyle={textDecoration:"none",margin:20,color:"white"}

    return(
        <>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link style={linkstyle} >Home</Link>
        </li>
        <li className="nav-item">
        <Link  style={linkstyle} to={"/profile"}>Profile</Link>
        </li>
        <li className="nav-item">
        <Link  style={linkstyle} to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
        <Link  style={linkstyle} to={"/settings"}>Settings</Link>
        </li>
        
      </ul>
    </div>
  </nav>
</>
    )
}
export default Header
import { useState } from "react"
import Customimage from "../images/custom-image"
import './card.css'


const Card=()=>{
    const[isflipped,setisflipped]=useState(false)

    const handleflip=()=>{
        setisflipped(!isflipped)
    }
    return(
        <>
        <div className={`card ${isflipped ? 'flipped' : ''}`} onClick={handleflip}>
            <div className="cardinner">
                <div className="cardfront">
                    <Customimage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></Customimage>
                </div>
                <div className="cardback">
                    <Customimage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"></Customimage>
                </div>
            </div>

        </div>
        </>
    )
}
export default Card
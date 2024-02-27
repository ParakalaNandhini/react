import './text.css'
import styles from "./text.module.css"


const FancyText=()=>{
    return(
        <div>
            <h5 style={{color:"red"}}>Internal</h5>
            <h5 className='external'>External</h5>
            <h5 className={styles.module}>External module</h5>
        </div>
    )
}
export default FancyText
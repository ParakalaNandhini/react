// import Audio from "react-bootstrap"

// const Spinner=()=>{
//     return(
//         <Audio
//         height="100"
//         width="100"
//         color="red"
//         ariaLabel="audio-loading"
//         wrapperStyle={{}}
//         wrapperClass="wrapper-class"
//         visible={true}
        
//         />
//     )
// }
// export default Spinner
import Spinner from 'react-bootstrap/Spinner';

function Spinners() {
  return(
  <>
   <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
   </>
  )
}

export default Spinners;
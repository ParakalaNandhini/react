import Card from "./card"

const Content=()=>{
    return (
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</>

    )
}
export default Content

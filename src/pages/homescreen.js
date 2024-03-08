import { useEffect, useState } from "react"
import Header from "../components/functional-componenets/navBar/header"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import React from "react";
import Spinners from "../components/functional-componenets/spinner/spinner";

const HomeScreen=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
       if(res.status===200){
        setdata(res.data)
       } 
    })
    .catch(err=>console.log(err))
    },[])
    return(
        <>
        <Header/>
        <h2>I'm HOME SCREEN</h2>
        {

          data.length>0
          ?
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
          {data.map((eachObject)=>{
            return(
                <React.Fragment >
                <Customcard data={eachObject} />
                </React.Fragment>

            )
          }) }
          </div>
          :
          <div className="spin"><Spinners/></div> 
        }
        </>
    )
}
export default HomeScreen



function Customcard(props) {
    const{data:{id,image,category,price,description,title}}=props
    const handleClick=()=>{

    }
  return (
    <Card style={{ width: '18rem' }}>
      <center><Card.Img variant="top" src={image} style={{width:100,height:100,}} /></center>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <br></br>
          <h4 style={{color:"red"}}>₹{price}</h4>
        </Card.Text>
        <button >
        <Link to={`/${category}/${id} `}>navigate</Link>
        </button>
      </Card.Body>
    </Card>
  );
}


import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomeScreen from '../pages/homescreen'
import SettingScreen from '../pages/settingscreen'
import AboutScreen from '../pages/aboutscreen'
import ProfileScreen from '../pages/profile'
import InvalidScreen from "../pages/invalidscreen"
import PostRoute from "./postroutes/post-route"
import PreRoute from "./preroutes/pre-route"
import { createContext, useReducer, useState } from "react"

 export const UserDetails=createContext()
 function reducer(state,action){
    switch(action.type){
        case "INCREMENT_COUNT":
        return{...state,counter:state.counter+1}
        default:
            return state
    }
    
 }
 const initialState={
    counter:0
 }
const Navigation=()=>{
    const[username,setusername]=useState("sangeetha")
    const[currentState,dispatch]=useReducer(reducer,initialState)
    const changeName=()=>{
        setusername("sangi")
    }
    const increment=()=>{
        dispatch(
            {
                type:"INCREMENT_COUNT"
            }
        )
    }
    return(
        <BrowserRouter>
        <UserDetails.Provider value={{
            username,
            changeName,
            counter:currentState.counter,
            increment
        }}>
            {
                true
                ?
                <PostRoute/>
                :
                <PreRoute/>
            }
      </UserDetails.Provider>
        
        </BrowserRouter>
      
    )
}
export default Navigation
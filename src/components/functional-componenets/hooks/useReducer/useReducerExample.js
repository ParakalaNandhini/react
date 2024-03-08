import { useReducer } from "react"

function reducer(state,action){
    //console.log(action,state)
    switch(action.type){
        case"INCREMENT_AGE_BY_10":
            return {...state,age:state.age+10}
        case "DECREMENT_AGE_BY_10":
            return {...state,age:state.age-10}
        case "CHANGE_THE_NAME":
            return {...state,name:"kiran"}
        case "ADD_FRUIT":
            return{...state,fruits:[...state.fruits,"newfruit"]}
        case "DELETE_FRUIT":
           return{...state,fruits:[...state.fruits.slice(0, action.id), ...state.fruits.slice(action.id + 1)]}
        case "UPDATE_FRUIT":
            return{...state,fruits:state.fruits.map((eachitem,index)=>{
                return index===action.id ? "updated fruit" : eachitem
            })}
        default:
            return state
    }
}
const initialState={
    age:100,
    name:"ram",
    fruits:["apple","banana"]
}
//const [state, dispatch] = useReducer(first, second, third)
const UseReducer=()=>{
    const[currentState,dispatch]=useReducer(reducer,initialState)
    const incrementAge=()=>{
        dispatch(
            {
                type:"INCREMENT_AGE_BY_10"
            }
        )
    }
    const decrementAge=()=>{
        dispatch(
            {
                type:"DECREMENT_AGE_BY_10"
            }
        )
    }
    const changeName=()=>{
        dispatch({
            type:"CHANGE_THE_NAME"
        })
    }
    const addfruit=()=>{
        dispatch({
            type:"ADD_FRUIT"
        })
    }
    const deletefruit=(index)=>{
        dispatch({
            type:"DELETE_FRUIT",
            id:index
        })
    }
    const updatefruit=(index)=>{
        dispatch({
            type:"UPDATE_FRUIT",
            id:index
        })
    }
    return(
        <>
        <h2>useReducer</h2>
        <h2>{currentState.age}</h2>
        <button onClick={incrementAge}>Increment age by 10</button>
        <button onClick={decrementAge}>Decrement age by 10</button>
        <h2>{currentState.name}</h2>
        <button onClick={changeName}>Changename</button>
        <ol>{currentState.fruits.map((eachitem,index)=>{
            return(
                <div key={index}>
                <li>{eachitem}</li>
                <button onClick={()=>deletefruit(index)}>Delete fruit</button>
                <button onClick={()=>updatefruit(index)}>Update fruit</button>
            </div>
            )   
        })}</ol>
        <button onClick={addfruit}>Add fruit</button>
        </>
    )
}
export default UseReducer
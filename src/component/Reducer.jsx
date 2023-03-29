import React from 'react'
import {useState} from 'react'
import {useReducer} from 'react'

function Reducer() {
    const [state,setState] = useState(0)
    const reducer = (state,action)=>{
        switch (action.type) {
            case "plus":
                console.log(action);
                return state+2
             case "minus":
                console.log(action);
                return state-2
             case "besh":
                console.log(action);
                return state+action.payload
            default: return state
        }
    }
    const [counter,dispatch] = useReducer(reducer,0)

   const Inc = () => {
    setState(state+1)
   }
    const Dec = () => {
    setState(state-1)
   }
  return (
    <div>
        <h1>State {state}</h1>
        <button onClick={Inc}>+++</button>
        <button onClick={Dec}>---</button>
        <h1>Counter {counter}</h1>
        <button onClick={()=>dispatch({type:"plus"})}>add</button>
        <button onClick={()=>dispatch({type:"minus"})}>dec</button>
        <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button onClick={()=>dispatch({type:"besh",payload:5})}>5 inc</button>
    </div>
  )
}

export default Reducer
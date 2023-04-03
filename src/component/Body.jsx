import React, {useContext } from 'react'
import {StutendContext} from './context'
import {useEmployeeContext} from '../context/Employee'


function Body( ) {
    const [state, setState] = useContext(StutendContext)
    const employee =   useEmployeeContext()
    const onDelete=(ids)=>{
        let res = state.filter((val)=>ids!==val.id)
        setState(res)
    }
  return (
    <div>
        {
            state.map((val)=>(
              <div style={{display:'flex',marginBottom:'10px'}}>
                <h1>{val.id}</h1>
                <h1>{val.name}</h1>
                <h1>{val.title}</h1>
                <button onClick={()=>onDelete(val.id)}>delete</button>
              </div>
            ))
        }
        <h1>{employee}</h1>
    </div>
  )
}

export default Body
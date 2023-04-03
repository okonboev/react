import React from 'react'
import {useState} from 'react'

function Local() {
    const [count,setCount] = useState(localStorage.getItem('count'))
    const [state,setState] = useState(123)
    const plus = () =>{
        localStorage.setItem('count',+count+1)
        setCount(+count+1)
    }

    localStorage.setItem('state',state)
    const minus = () =>{
        localStorage.setItem('count',count-1)
        setCount(count-1)
    }
  return (
    <div>
        <h1>count {localStorage.getItem('count')}</h1>
        <h1>
            {state}
        </h1>
        <button onClick={plus}>+++</button>
        <button onClick={minus}>---</button>
        <button onClick={()=>localStorage.removeItem('count')}>remove item</button>
        <button onClick={()=>localStorage.clear()}>clear</button>
    </div>
  )
}

export default Local

// localStorage.setItem(name,value)
// localStorage.getItem(name)
// localStorage.removeItem(name)
// localStorage.clear()
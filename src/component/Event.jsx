import React, {useState} from 'react'

function Event() {
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("text");
    const [gender,setGender] = useState("");
    const [check,setCheck] = useState(false);
    const onChange = (e) => {
        setTitle(e.target.value)
    }
    const onSelect = (e)=>{
        setGender(e.target.value)

        console.log(e.target.value);
    }
    const onCheck=(e)=>{
        setCheck(e.target.checked)
        console.log(e.target.checked);
    }
  return (
    <div>
       <h1>Event {count}</h1>
       <button onClick={() => setCount(count+4)}>+++</button>
       <button onClick={() => setCount(count-2)}>---</button> <br />
       <h1>name:{title}</h1>
       <h1>gender:{gender}</h1>
       <h1>gender:{check && "checked"}</h1>
       <input type="text" onChange={onChange} />
       <select onChange={onSelect} name="" id="">
        <option value="males">male</option>
        <option value="females">female</option>
        <option value="unknownnn">unknown</option>
       </select><br />
       <label htmlFor="check">check</label>
       <input onChange={onCheck} type="checkbox" />
    </div>
  )
}
export default Event

// input chechbox select

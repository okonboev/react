import React, {useState} from 'react'
import { data } from '../mock';

function Map() {
  const [search, setSearch]=useState("")
  const [datas, setData]=useState(data)
  const onSearch = (event) => {
    setSearch(event.target.value);
    let res = datas.filter(val=>val.name.includes(search))
    setData(res)
  }
  const onDelete = (id) =>{
    let result = datas.filter(val=>val.id !== id)
    setData(result)
  } 
  return (
    <div>
      <input type="text" placeholder='search' onChange = {onSearch} />
      <table border="1">
        <thead>
          <tr>
            <th>id </th>
            <th>age</th>
            <th>name</th>
            <th>address</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((val,inx)=>{
              return(
                <tr key = {val.id}>
                  <td>{val.id}</td>
                  <td>{val.age}</td>
                  <td>{val.name}</td>
                  <td>{val.address}</td>
                  <td>{val.email}</td>
                  <td>
                    <button onClick={() => onDelete(val.id)}>delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}


export default Map;

//CRUD
// id	age	name	address	email	Action
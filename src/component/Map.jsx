import React, {useState} from 'react'
import { data } from '../mock';

function Map() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("id");
  const [datas, setData] = useState(data);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(null);
  const [names, setNames] = useState("");
  const [addresses, setAddresses] = useState("");
  const onSearch = (event) => {
    setSearch(event.target.value);
    let res = datas.filter(val=>`${val[select]}`.toLowerCase().includes(search))
    setData(res)
  }
  const getSelectedVal = (e) =>{
    setSelect(e.target.value)
  }
  console.log(select);
  const onDelete = (id) =>{
    let result = datas.filter(val=>val.id !== id)
    setData(result)
  } 
  const getValueName = (e) =>{
    setName(e.target.value)
  }
  const getValueAddress = (e) =>{
    setAddress(e.target.value)
  }

  const onCreate = () =>{
    let user = {
      id:Date.now(),
      name:name,
      address:address,
    }
    let res = [...datas,user];
    name && address && setData(res)
    setName("");
    setAddress("")
  }
  const onEdit = (val)=>{
      setActive(val)
      setNames(val.name)
      setAddresses(val.address)
  }
  const onSave = ()=>{
    let res = datas.map((val)=>active.id==val.id ? {...val, name:names,address:addresses} : val )
    setData(res)
    console.log(res);
    setActive(null)
  }



  const onChangeName = (e) => {
    setNames(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddresses(e.target.value)

  }
  return (
    <div>
      <input value={name} onChange={getValueName} type="text" placeholder='name' />
      <input value={address} onChange={getValueAddress} type="text" placeholder='address' />
      <button onClick={onCreate}>add</button>
      <br />
      <br />
      <hr />
      <input type="text" placeholder='search' onChange = {onSearch} />
      <select onChange={getSelectedVal} name="" id="">
        <option value="id">id</option>
        <option value="name">name</option>
        <option value="address">address</option>
      </select>
      <table border="1" width={"70%"}>
        <thead>
          <tr>
            <th>id </th>
            <th>name</th>
            <th>address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.length ?
            datas.map((val,inx)=>{
              return(
                <tr key = {val.id}>
                  <td>{val.id}</td>
                  <td>
                    {
                      active?.id === val.id ? <input onChange={onChangeName} value={names} type="text" /> : val.name
                    }
                  </td>
                  <td>
                    {
                      active?.id === val.id ? <input onChange={onChangeAddress} value={addresses} type="text" /> : val.address
                    }
                  </td>
                  <td>
                    <button onClick={() => onDelete(val.id)}>delete</button>
                    {
                      active?.id === val.id ? <button onClick={onSave}>save</button> : <button onClick={()=>onEdit(val)}>edit</button>
                    }
                  </td>
                </tr>
              )
            }) :
            <tr>
                <th colSpan={"4"}><h1>No Data</h1></th>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Map;

//CRUD
// id	age	name	address	email	Action
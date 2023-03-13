import React from 'react'
import SubChildCom from './SubChildCom';

function ChildCom({data}) {
    console.log(data,"data");
  return (
    <div>
        <h1>Child Com</h1>
        <h3>{data[0].age} {data[0].email}</h3>
        <h3>{data[1].age} {data[1].email}</h3>
        <h3>{data[2].age} {data[2].email}</h3>
        <h3>{data[3].age} {data[3].email}</h3>
        <h3>{data[4].age} {data[4].email}</h3>
        <hr />
        <SubChildCom address={data}/>
    </div>
  )
}

export default ChildCom
import React from 'react'
import ChildCom from './ChildCom';

function Cards({datas}) {
    console.log(datas);
  return (
    <div>
        <h1>Cards Com</h1>
        <h3>{datas[0].id} {datas[0].names}</h3>
        <h3>{datas[1].id} {datas[1].names}</h3>
        <h3>{datas[2].id} {datas[2].names}</h3>
        <h3>{datas[3].id} {datas[3].names}</h3>
        <h3>{datas[4].id} {datas[4].names}</h3>
        <hr />
        <ChildCom data={datas}/>
    </div>
  )
}

export default Cards
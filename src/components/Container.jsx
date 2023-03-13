import React from 'react'

function Container({datas}) {
  return (
    <div>
        <h1>Container</h1>
        <h3>{datas[0].id} {datas[0].names} {datas[0].email} {datas[0].address}</h3>
        <h3>{datas[1].id} {datas[1].names} {datas[1].email} {datas[1].address}</h3>
        <h3>{datas[2].id} {datas[2].names} {datas[2].email} {datas[2].address}</h3>
        <h3>{datas[3].id} {datas[3].names} {datas[3].email} {datas[3].address}</h3>
        <h3>{datas[4].id} {datas[4].names} {datas[4].email} {datas[4].address}</h3>
        <hr />
    </div>
  )
}

export default Container
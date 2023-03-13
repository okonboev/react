import React from 'react'

function SubChildCom({address}) {
    console.log(address,"adress");
  return (
    <div>
        <h1>SubChild Com</h1>
        <h3>{address[0].address} </h3>
        <h3>{address[1].address} </h3>
        <h3>{address[2].address} </h3>
        <h3>{address[3].address} </h3>
        <h3>{address[4].address} </h3>
        <hr />

    </div>
  )
}

export default SubChildCom
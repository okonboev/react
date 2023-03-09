import React from 'react'

const title = "Group 4";
export function Navbar({title,children}) {
   
  return (
    <div>
      {title}
      {children} 
    </div>
  )
}


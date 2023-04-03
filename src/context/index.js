import React from 'react'
import Employee from './Employee'
import Fruits from './Fruits'
import Student from './Student'

function Context({children}) {
  return (
    <Employee>
        <Fruits>
            <Student>
                {children}
            </Student>
        </Fruits>
    </Employee>
  )
}

export default Context
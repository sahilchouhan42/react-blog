import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject2 = () => {
    const subject = useContext(SubjectContext)
  return (
    <div style={{backgroundColor: 'gray', padding: "10px"}}>
      <h1>Subject is : {subject}</h1>
    </div>
  )
}

export default Subject2

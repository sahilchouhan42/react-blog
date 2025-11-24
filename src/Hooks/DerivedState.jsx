import React, { useState } from 'react'

const DerivedState = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('')
    const handleAddUsers = ()=>{
        setUsers([...users,user])
    }

  return (
    <div>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='add new user' />
      <button onClick={handleAddUsers}>Add User</button>
      {
        users.map((item, i)=>{
            <h4 key={i}>{item}</h4>
        })
      }
    </div>
  )
}

export default DerivedState

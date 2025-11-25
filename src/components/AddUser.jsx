import React, { useState } from 'react'

const AddUser = ({setUser}) => {
    
  return (
    <>
      <div>
        <h1>Add User</h1>
        <input onChange={(e)=>setUser(e.target.value)} type="text" name="" id="" placeholder='Enter User Name' />
        <hr />
      </div>
    </>
  )
}

export default AddUser


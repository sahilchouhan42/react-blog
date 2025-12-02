import React, { useId } from 'react'

const UseIDHook = () => {
    const name  = useId()
    const password = useId()
  return (
    <>
      <form action="">
        <label htmlFor={name}>Enter name </label>
        <input type="text" name="" id={name} placeholder='Enter User Name' />
        <br /><br />
        <label htmlFor={password}>Enter Password    </label>
        <input type="password" name="" id={password} placeholder='Enter Password' />
      </form>
    </>
  )
}

export default UseIDHook

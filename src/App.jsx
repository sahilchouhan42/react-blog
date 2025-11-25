import AddUser from "./components/AddUser"
import DisplayUser from "./components/DisplayUser"
import React, { useState } from 'react'


const App = ()=>{
  const [user, setUser] = useState("")
  return(
    <>
    <AddUser setUser={setUser} />
    <DisplayUser user={user} />
    </>
  )
}
export default App
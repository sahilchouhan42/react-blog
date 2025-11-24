import { useState } from "react"

const App=()=>{
  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser]  = useState()
  const handleAddUsers = ()=>{
    setUsers([...users,singleUser])
  }

  const total = users.length
  const last = users[users.length-1]
  const unique = [...new Set(users)].length
  // console.log(users)
  return (
    <>
    <h2>Total user: {total} </h2>
    <h2>last user: {last} </h2>
    <h2>unique user:{unique} </h2>
    <input type="text" onChange={(event)=>setSingleUser(event.target.value)} placeholder="enter new user" />
    <button onClick={handleAddUsers}>Add new user</button>
    {
      users.map((item,i)=>{
        return <h4 key={i}>{item}</h4>
      })
    }
    </>
  )
}
export default App
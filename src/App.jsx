import { useState } from "react"

const App = () => {
  // const [name, setName] = useState("anil")
  const [data, setData] = useState({
    name: "Anil",
    address:{
      city: "Delhi",
      country: "India"
    }
  })

  const handleName = (value) => {
    data.name = value
    // console.log(data)
    setData({...data})
  }

  const handleCity = (value)=>{
    data.address.city = value
    setData({...data})

  }

  const handleCountry = (value)=>{
    data.address.country = value
    setData({...data})
  }
  return (
    <>
      <h1>Updating Objects in State</h1>
      {/* <button onClick={handleName} >Update Name</button> */}
      <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)} />
      <br /><br />
      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)} />
      <br /><br />
      <input type="text" placeholder="update coutry" onChange={(event)=>handleCountry(event.target.value)} />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  )
}

export default App
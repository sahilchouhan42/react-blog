import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState(['anil', 'sam', 'peter'])

  const [dataDetails, setDataDetails] = useState ([
    {name: 'anil', age:26},
    {name: 'sam', age:27},
    {name: 'bruce', age:28},
  ])
  const handleUser = (name)=>{
    data[data.length-1] = name
    console.log(data)
    setData([...data])
  }

  const handleAge = (age)=>{
    dataDetails[dataDetails.length -1].age = age
    console.log(dataDetails)
    setDataDetails([...dataDetails])
  }
  return (
    <>
      <h1>Updating Array in State</h1>
      <input type="text" placeholder='enter name' onChange={(e)=>handleUser(e.target.value)} />
      {
        data.map((item, i)=>(
          <h3 key={i}>{item}</h3>
        ))
      }
      <hr /><hr />
      {
        dataDetails.map((item, i)=>(
          <h2 key={i}>{item.name} {item.age}</h2>
        ))
      }

      <input type="text" placeholder='updateage' onChange={(e)=>handleAge(e.target.value)} />
    </>
  )
}

export default App

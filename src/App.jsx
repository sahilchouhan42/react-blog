import React, { useState } from 'react'
import UseActionHook from './components/UseActionHook'
import UseIDHook from './components/UseIDHook'
import Fragments from './components/Fragments'
import College2 from './component2/College2'
import { SubjectContext } from './component2/ContextData'
import useToggle from './Hooks/useToggle'

const App = () => {
  const [value, toggleValue] = useToggle(true)
  const [data, setData] = useToggle(true)
  // const [subject,setSubject] = useState("English")
  return (
    <div>
    {/* <div style={{backgroundColor: 'yellow', padding: "10px"}}> */}
      {/* <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="Hindi">Hindi</option>
        </select> */}
      {
        value?<h1>Custom Hooks in React JS</h1>:null
      }
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>
      <button onClick={()=>toggleValue(true)}>Show Heading</button>
      <hr /><hr />
      {
        data?<h1>Second Heading</h1>:null
      }
      <button onClick={setData}>Toggle Second Heading</button>
      <button onClick={()=>setData(false)}>Hide Second Heading</button>
      <button onClick={()=>setData(true)}>Show Second Heading</button>
      
     {/* <UseActionHook />  */}
     {/* <UseIDHook /> */}
     {/* <Fragments /> */}
     {/* <College2 />
     <button onClick={()=>setSubject('')}>Clear Subject</button>
     </SubjectContext.Provider> */}
    {/* </div> */}
    </div>
  )
}

export default App

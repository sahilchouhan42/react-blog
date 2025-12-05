import React, { useState } from 'react'
import UseActionHook from './components/UseActionHook'
import UseIDHook from './components/UseIDHook'
import Fragments from './components/Fragments'
import College2 from './component2/College2'
import { SubjectContext } from './component2/ContextData'

const App = () => {
  const [subject,setSubject] = useState("English")
  return (
    <div style={{backgroundColor: 'yellow', padding: "10px"}}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="Hindi">Hindi</option>
        </select>
      <h1>Context API</h1>
      
     {/* <UseActionHook />  */}
     {/* <UseIDHook /> */}
     {/* <Fragments /> */}
     <College2 />
     <button onClick={()=>setSubject('')}>Clear Subject</button>
     </SubjectContext.Provider>
    </div>
  )
}

export default App

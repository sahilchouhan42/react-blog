import React from 'react'
import { useFormStatus } from 'react-dom'

const App = () => {

  const handleSubmit = async ()=>{
    await new Promise(res=>setTimeout(res, 2000))
    console.log('Submit')

  }

  const CustomForm = ()=>{

    const {pending} = useFormStatus()
    console.log(pending)
    return (<div>
      <input type="text" name="" id="name" placeholder='enter your name' />
        <br /><br />
        <input type="password" name="" id="password" placeholder='enter your password' />
        <br /><br />
        <button disabled={pending}>{pending?"Submitting...": "Submit"}</button>
    </div>
  )}
  return (
    <div>
      <h1>useFromStatus Hook in React js 19 tutorial</h1>
      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </div>
  )
}

export default App

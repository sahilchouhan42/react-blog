import React, { useActionState } from 'react'

const UseActionHook = () => {
    const handleSubmit = async(previousData, formData)=>{
        let name = formData.get('name')
        let password = formData.get('password')
        await new Promise(res=>setTimeout(res, 2000))
        // console.log('Handle Submit Called', name, password)
        if(name && password){
            return {message: "Data Submitted" ,name, password}
        } else{
            return {error: 'Please Submit data'}
        }
    }
    const [data, action, pending]  = useActionState(handleSubmit, undefined)
    console.log(data)
  return (
    <>
      <h1>Use Action Hook In React Js</h1>
      <form action={action}>
      <input defaultValue={data?.name} type="text" name="name" id="" placeholder='enter name' />
      <br /><br />
      <input defaultValue={data?.password} type="password" name="password" id="" placeholder='enter password' />
      <br /><br />
      <button disabled={pending}>Submit Data</button>
      <br />
      </form>

      {
        data?.error && <span style={{color: 'red'}}>{data.error}</span>
      }
      {
        data?.message && <span style={{color: 'green'}}>{data.message}</span>
      }

      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </>
  )
}

export default UseActionHook

import { useEffect } from "react"

function Api(){

    useEffect(()=>{
    const api = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    console.log(data)
    const ApiTitle = data.title
    console.log(ApiTitle)
    
    }
    api()
    },[])

    return(
        <div>API Testing</div>
    )
}

export default Api
import { useEffect, useState } from "react"

function RandomUserData(){

    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(data=>setUserData(data))
    },[])

    return(
        <div>
            <h1>User Data</h1>
            <div>
                {userData &&(
                    <div>
                        <h2>API Information</h2>
                        <p>UserId : {userData.userId}</p>
                        <p>Id : {userData.id}</p>
                        <p>Id : {userData.id}</p>
                        <p>Title : {userData.title}</p>
                        <p>Status : {userData.completed}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RandomUserData
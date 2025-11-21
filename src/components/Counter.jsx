import { useEffect } from "react"

const Counter=({count, data})=>{

    useEffect(()=>{
        console.log('Moutning Phase Only!');
    }, [])

    useEffect(()=>{
        console.log("Update Phase Only");
    }, [count])

    useEffect(()=>{
        return ()=>{
            console.log('unmount phase only');
        }
    }, [])
    return (
        <div>
            <h1>Counter Component : {count}</h1>
            <h1>Data Component : {data}</h1>
        </div>
    )
}

export default Counter
import React, { useEffect, useState } from 'react'

const Clock = ({color}) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, [])
    return (
        <div>
            <h1 style={{
                color:color,
                backgroundColor:"black",
                width: "180px",
                padding: "15px",
                borderRadius: "15px"
            }}
            >{time}</h1>
        </div>
    )
}

export default Clock

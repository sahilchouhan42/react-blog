const Student = ({student})=>{
    return (
        <div>
            <h3>Students: </h3>
                {
                    student.map((student)=>(
                        <ul style={{
                            color: "white",
                            backgroundColor:"black",
                            padding:"25px",
                            margin: "10px",
                            listStyle:"none",
                            borderRadius: "10px"
                        }}>
                            <li>Name: {student.name}</li>
                            <li>Age: {student.age}</li>
                            <li>Email: {student.email}</li>
                        </ul>
                    ))
                }
        </div>
    )
}

export default Student
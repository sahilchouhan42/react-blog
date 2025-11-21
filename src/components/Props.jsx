function Props({obj}){
    // console.log(name, age)
    return (
        <div>
            <h1>This is props component</h1>
            <h2>Name is : {obj.objname}</h2>
            <h2>Age is : {obj.objage}</h2>
            <h2>Email is : {obj.objemail}</h2>
            <hr />
        </div>
    )
}

export default Props
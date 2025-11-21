function Wrapper({children, color="red"}){
    return (
        <div style={{color:color, border: "5px solid green"}}>
            {children}
        </div>
    )
}
export default Wrapper
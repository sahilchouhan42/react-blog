function FirstComponent(){
    function myFunc(){
        alert('My funtion called')
    }
    return (
        <div>
            <h1>Anil Siddhu</h1>
      <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="" srcset="" width={300} height={300}  />
      <ul>
        <li>Invent New Traffic Lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum Technology</li>
      </ul>
      <button onClick={myFunc}>Click me</button>
        </div>
    )
}

export default FirstComponent
import { useState } from "react"

function Count(){
    const [count,setCount]=useState(0);
    function handleBt(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }
    return(
        <div>
            <h1>counter is{count}</h1>
            <button onClick={(handleBt)}>submit</button>
            <button onClick={(decrease)}> click</button>
        </div>
    )
}
export default Count;
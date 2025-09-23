import { useState } from "react";

function Count(){

    const [count,setCount]=useState(0)

    function handleCount(){
        setCount(count+1)
    }
    return(
        <div>
            <h2>Count is {count}</h2>
            <button onClick={handleCount}>click !</button>
        </div>
    )
}

export default Count;
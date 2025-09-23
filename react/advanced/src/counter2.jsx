import { useState } from "react";

function Count2(){

    const[value , setValue]=useState(0)

    function handlePlus(){
        setValue(value+1)
    }

    function handleMinus(){
        setValue(value-1)
    }

    return(
        <div>
            <button onClick={handlePlus}>increament</button>
            <h2>count is {value}</h2>
            <button onClick={handleMinus}>decreament</button>
        </div>
    )
}

export default Count2;
import { useState } from "react";

function Dbl(){
    const[number,setNumber]=useState('0')

    

    function handleNo(event){
        setNumber(event.target.value)
    }


    return(
        <div>
            <input type="text" placeholder="Enter number" onInput={handleNo} onClick={handleNo}/>
            {number && <h2>{number} * 2 = {number*2}</h2>}
        </div>
    )
}

export default Dbl;
import { useState } from "react";

function Addmul(){
    const [number,seetNumber] = useState();
    function hanldeD(e){

        seetNumber(e.target.value);
    
    }
    return(
        <div>
            <input type="text" placeholder="enter no" value={number} onInput={hanldeD}/>
            <button onChange={(hanldeD)} >press</button>
            <h1>no is {number*2}</h1>
        </div>
    )
}
export default Addmul;
import { useState } from "react";

function Greet(){

    const[name,setName] = useState('')
    const[greet,setGreet] = useState('Hello')

    function morning(){
        setGreet("Good Morning")
    }
    
    function handleGreet(event){
        setName(event.target.value)
    }



    return(
        <div>
            <input type="text" placeholder="Enter your name !" onInput={handleGreet} onClick={morning}/>
            <h3>{greet} {name}</h3>
        </div>
    )
}

export default Greet;
import { useState } from "react";

export default function Greeting() {

    const [name, setName] = useState();

    function handleInputChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <input type="text" name="inputName" placeholder= "Enter your name" onInput={handleInputChange}/>
            { name && <h1>Good morning {name}</h1> }
        </>
    );


}
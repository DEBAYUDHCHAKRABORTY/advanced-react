import { useState } from "react";

export default function Number() {

    const [number, setNumber] = useState(0);

    function handleInputChange(e) {
        setNumber(e.target.value)
    }

    return (
        <>
            <input type="number" name="inputNumber" placeholder="enter the number" onInput={handleInputChange} />
            <h1>total number is {number*2}</h1>

        </>
    )
}
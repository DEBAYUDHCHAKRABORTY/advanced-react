import { useState } from "react"

function Greett() {
    const [name, setName] = useState("");

    function handleFormChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <input name = "inputStr" type="text" placeholder="enter name" value={name} onInput={handleFormChange} />
            {
                name &&
                <h1>Good Morning {name}</h1>
            }
        </div>
    )
}
export default Greett;
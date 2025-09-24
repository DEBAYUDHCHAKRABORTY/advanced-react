// import react, { useState } from react;



function Timer() {
  
    const {name, setName} = useState("Babai");


    return (
        <h1>Good evening... {setName}</h1>

    )
}

export default Timer;
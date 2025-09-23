function Greet(){
    function sayhello(){
        console.log("good morning");
        alert("good morning")
    }
    return(
        <div>
        <button onClick={(sayhello)}>click</button>
        </div>
    )
}
export default Greet;
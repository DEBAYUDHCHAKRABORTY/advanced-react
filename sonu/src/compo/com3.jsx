function Multi(){
    function mul(){
        console.log(2*2);
        alert(2*2)
    }
    return(
        <div>
            <button onClick={(mul)}> Click</button>
        </div>
    )
}
export default Multi;
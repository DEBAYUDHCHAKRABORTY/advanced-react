function Add(){
    function sum(){
        console.log(2+2);
        alert(2+2);
    }
    return(
        <div>
            <button onClick={(sum)}>sumnit</button>
        </div>
    )
}
export default Add;
export default function Clicker({message, buttonText}){

    return (
        <button onClick={showMessage}>
            {buttonText}
        </button>
    )

}
function showMessage(){
    alert({message}); 
}
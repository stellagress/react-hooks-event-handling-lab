// Code EyesOnMe Component Here

function EyesOnMe(){
    return(
        <button onFocus={()=>console.log('Good!')} onBlur={()=>console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}



export default EyesOnMe




// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.












import { Alert } from "bootstrap"
import { useState} from 'react'
// const myFunc = () => {
//     alert('Ho Yeah !');
// }

function myotherfunction(){
    alert('HELLO WORLD !!!')
}
const Button = (props) =>{
    let [count,setCount]= useState(props.start);
    return(
        // <button onClick={ myFunc }> Click Me !!! </button>
        <button onClick= { ()=> {setCount(count+1)} }> Click Me !!! ({count}) </button>
    )
}
export default Button
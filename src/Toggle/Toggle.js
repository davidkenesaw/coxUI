import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Toggle(props) {
    const [toggle, setToggle] = useState(true)
    const [text, setText] = useState("Pagination On")
  
    function toggleOnOff(){
        setToggle(prevToggle => !prevToggle)
        if(toggle == false){
          setText("Pagination On")
        }else{
          setText("Pagination Off")
        }
    }
    
    props.func(toggle)

    return (<Button variant="primary" onClick={toggleOnOff}>{text}</Button>);
}

export default Toggle;
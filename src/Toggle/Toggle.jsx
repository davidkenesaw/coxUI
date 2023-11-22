import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

function Toggle(props) {
    const [toggle, setToggle] = useState(true)
  
    function toggleOnOff(){
        setToggle(prevToggle => !prevToggle)
    }
    
    props.func(toggle)

    return (
      
    <>
      <Button variant="primary" onClick={toggleOnOff}>Primary</Button>
      
    </>
  );
}

export default Toggle;
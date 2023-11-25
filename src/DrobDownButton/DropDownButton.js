import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';

const DropDownButton = (props) => {
  
  const [value,setValue] = useState("Heading")
  
  props.func(value)
  
  
    return (
<Dropdown onSelect={(e)=>{setValue(e)}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"Heading"}>Heading</Dropdown.Item>
        <Dropdown.Item eventKey={"Subheading"}>Subheading</Dropdown.Item>
        <Dropdown.Item eventKey={"Price"}>Price</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownButton
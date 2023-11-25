import React from 'react'
import { useState, useEffect } from 'react';





const SearchBar = (props) => {

    const [value, setValue] = useState("")

    props.func(value)


    function handleChange(e){
        setValue(e.target.value);  
    }


    return (
        <input class='mt-1 form-control' value={value} onChange={handleChange} placeholder="Search"/>
    )
}

export default SearchBar
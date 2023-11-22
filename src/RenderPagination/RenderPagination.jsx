import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import React from 'react'

const RenderPagination = (props) => {
    
    const [active,setActive] = useState(1)

    function paginationClicked(event){
        var itemClicked = event.target.text;
        setActive(Number(itemClicked))
    }

    props.func(active)
    
    let items = [];
    let num = 1;
    for (let number = 0; number < props.data.length; number+=props.perPage) {
      items.push(
        <Pagination.Item key={num} active={num === active} onClick={paginationClicked}>
          {num++}
        </Pagination.Item>,
      );
    }


    return (
        <Pagination>{items}</Pagination>
    )
}

export default RenderPagination
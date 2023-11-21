import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function CardComp(props){
  
  const [pictrue,setPicture] = useState("./images/Default.jpg")

  useEffect(() => {
    if(props.showBridge == true){
        setPicture("./images/thumbnail_Bridge.jpg")
    }else{
      setPicture("./images/Default.jpg")
    }
  }, [props.Page]);

  return (
    <Card className="mx-auto my-2" style={{ width: '18rem', height:'23rem', padding_top: '10prem'}}>
      <Card.Body>
      
      <Card.Img variant="top" src={pictrue} />
      <Card.Title>{props.Heading}</Card.Title>
      <Card.Text>{props.Subheading}</Card.Text>
      </Card.Body>
      
      <Card.Footer className="text-right">
        <Card.Text style={{color:"green"}}class='ml-auto fw-bold'>
          ${props.Price}
        </Card.Text>
      </Card.Footer>
    </Card>
  )
}
export default CardComp
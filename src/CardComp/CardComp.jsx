import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function CardComp(props){
  
  const [pictrue,setPicture] = useState("./images/Default.jpg")
  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})
  useEffect(() => {
    if(props.showBridge == true){
        setPicture("./images/thumbnail_Bridge.jpg")
    }else{
      setPicture("./images/Default.jpg")
    }
  }, [props.Page,props.setnumber_per_page]);

  return (
    <Card className="mx-auto my-2" style={{ width: '18rem', height:'23rem', padding_top: '10prem'}}>
      <Card.Body>
      
      <Card.Img variant="top" src={pictrue} />
      <Card.Title>{props.Heading}</Card.Title>
      <Card.Text>{props.Subheading}</Card.Text>
      </Card.Body>
      
      <Card.Footer className="text-right">
        <Card.Text style={{color:"green"}}class='ml-auto fw-bold'>
          {CURRENCY_FORMATTER.format(props.Price)}
        </Card.Text>
      </Card.Footer>
    </Card>
  )
}
export default CardComp
import data from './data/data.json'
import CardComp from './CardComp/CardComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RenderPagination from './RenderPagination/RenderPagination';
import { useState, useEffect } from 'react';

function App() {
  
  const [page,setPage] = useState(1);
  
  

  const getPage = (data) => {
    console.log(data);
    setPage(data);
  }

  return (

  
    <div className="App">
      <header className="App-header">
        <Container class="gap-3">
          <Row>
            {data.map((card,index) =>{
              return(
                      
                <Col class='mt-1'>
                {index}
                  <CardComp 
                    Heading={card.Heading} 
                    Subheading={card.Subheading} 
                    Price={card.Price}
                    showBridge={card.showBridge}
                    Page={page}

                  />
                    
                </Col>
                      
              )
            }).filter((item,index)=>index > page * 4 - 4 -1 && index < page * 4 )}
          </Row>
        </Container>

        <RenderPagination func={getPage} data={data}/>
      </header>
    </div>
  );
}

export default App;

import data from './data/data.json'
import CardComp from './CardComp/CardComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RenderPagination from './RenderPagination/RenderPagination';
import { useState, useEffect } from 'react';
import SizeHook from './SizeHook/SizeHook'

function App() {
  
  const [page,setPage] = useState(1);
  const [number_per_page,setnumber_per_page] = useState(4);
  const screenSize = SizeHook();

  const getPage = (data) => {
    console.log(data);
    setPage(data);
  }

  useEffect(() => {
    
    if(screenSize.width <"1500"){
      setnumber_per_page(4)
    }
    if(screenSize.width <"1401" && screenSize.width > "991"){
      setnumber_per_page(3)
    }
    if(screenSize.width <="992" && screenSize.width > "770"){
      setnumber_per_page(2)
    }
    if(screenSize.width <="770"){
      setnumber_per_page(1)
    }
    if(screenSize.width >"1500"){
      setnumber_per_page(4)
    }
  },[,screenSize.width]);

  return (

  
    <div className="App">
      <header className="App-header">
      <div>
      <h1>Screen Size Detection with React Hook</h1>
      <p>Width: {screenSize.width}</p>
      <p>Height: {screenSize.height}</p>
    </div>
        <Container class="gap-3">
          <Row>
            {data.map((card,index) =>{
              return(
                      
                <Col class='mt-1'>
                  <CardComp 
                    Heading={card.Heading} 
                    Subheading={card.Subheading} 
                    Price={card.Price}
                    showBridge={card.showBridge}
                    Page={page}
                    setnumber_per_page={number_per_page}
                  />
                    
                </Col>
                      
              )
            }).filter((item,index)=>index > page * number_per_page - number_per_page -1 && index < page * number_per_page )}
          </Row>
        </Container>

        <RenderPagination func={getPage} perPage={number_per_page}data={data}/>
      </header>
    </div>
  );
}

export default App;

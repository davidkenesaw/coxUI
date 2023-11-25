import data from './data/data.json'
import CardComp from './CardComp/CardComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RenderPagination from './RenderPagination/RenderPagination';
import { useState, useEffect } from 'react';
import SizeHook from './SizeHook/SizeHook'
import Toggle from './Toggle/Toggle'
import SearchBar from './SearchBar/SearchBar'
import DropDownButton from './DrobDownButton/DropDownButton';
import './App.css'



function App() {
  
  const [dropdownVal,setDropdownVal] = useState("")
  const [toggle,setToggle] = useState(true)
  const [array,setArray] = useState([])
  const [searchVal,setSearchVal] = useState("")
  const [page,setPage] = useState(1);
  const [number_per_page,setnumber_per_page] = useState(4);
  const screenSize = SizeHook();
  const [length,setLength] = useState(data.length)


  const getPage = (data) => {
    console.log(data);
    setPage(data);
  }
  const getToggle = (data) => {
    console.log(data);
    setToggle(data);
  }
  const getInput = (data) => {
    console.log(data);
    setSearchVal(data);
  }
  const getDropdown = (data) => {
    console.log(data);
    setDropdownVal(data);
  }
  useEffect(() => {
    
    if(toggle==true){
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
    }else{
      setnumber_per_page(12)
    }
  },[dropdownVal,screenSize.width,toggle]);


  useEffect(() => {
    setArray(()=> {
    return data.sort((a,b)=>{
      if(dropdownVal == "Price"){
        return a.Price-b.Price
      }if(dropdownVal == "Heading"){
        return a.Heading === b.Heading ? 0 : a.Heading < b.Heading ? -1 : 1;
      }if(dropdownVal == "Subheading"){
        return a.Subheading === b.Subheading ? 0 : a.Subheading < b.Subheading ? -1 : 1
      }else{
        return
      }
    }).filter((card,index)=>
      card.Heading.includes(searchVal)
    )
    .filter((card,index)=>index > page * number_per_page - number_per_page -1 && index < page * number_per_page && card.Heading.includes(searchVal))
            .map((card,index) =>{
              return(
                          
                <Col md="auto">
                  <CardComp 
                    Heading={card.Heading} 
                    Subheading={card.Subheading} 
                    Price={card.Price}
                    showBridge={card.showBridge}
                    Page={page}
                    setnumber_per_page={number_per_page}
                    searchVal={searchVal}
                    dropdownVal={dropdownVal}
                  />
                        
                </Col>
                          
              )
            })})
            
            
  },[number_per_page,page,searchVal,setArray,toggle, dropdownVal]);

  useEffect(() => {
    if(array.length < 4){
      console.log(array.length)
    }
    
  },[searchVal,array.length]);


  return (

  
    <div className="App">
      <header className="App-header">
      <div>
      
      {/*<p>Width: {screenSize.width}</p> 
      <p>Height: {screenSize.height}</p>*/}
        </div>
        <div class="text-center mx-auto mt-1 pt-5" style={{width: "480px"}}>
          <SearchBar func={getInput}/>
        </div>
        <div className="d-flex align-items-center justify-content-center pt-2">
          <DropDownButton func={getDropdown}/>

        </div>
        <Container class="gap-3">
          <Row className="justify-content-md-center">
            {array}
          </Row>
        </Container>
        <div className="d-flex align-items-center justify-content-center">
          <RenderPagination func={getPage} perPage={number_per_page}data={data}/>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Toggle func={getToggle}/>

        </div>
        
        
          
      </header>
    </div>
  );
}

export default App;

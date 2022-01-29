import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Icon from './components/Icon';

const ItemArray = new Array(9).fill("empty");

const App = () => {
  
  const [isCross, setIsCross] = useState(false);
  const [winnerMsg, setwinnerMsg] = useState("");

  const appName = "{{ TIC-TOC-TOE }}"
  const checkWinner = () => {
    if(
        ItemArray[0] === ItemArray[1] && 
        ItemArray[0] === ItemArray[2] && 
        ItemArray[0] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[0]} won :)`)
    }else if(
        ItemArray[3] === ItemArray[4] && 
        ItemArray[4] === ItemArray[5] && 
        ItemArray[3] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[3]} won :)`)
    }else if(
        ItemArray[6] === ItemArray[7] && 
        ItemArray[7] === ItemArray[8] && 
        ItemArray[6] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[6]} won :)`)
    }else if(
        ItemArray[0] === ItemArray[3] && 
        ItemArray[3] === ItemArray[6] && 
        ItemArray[0] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[0]} won :)`)
    }else if(
        ItemArray[1] === ItemArray[4] && 
        ItemArray[4] === ItemArray[7] && 
        ItemArray[1] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[1]} won :)`)
    }else if(
        ItemArray[2] === ItemArray[5] && 
        ItemArray[5] === ItemArray[8] && 
        ItemArray[2] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[2]} won :)`)
    }else if(
        ItemArray[0] === ItemArray[4] && 
        ItemArray[4] === ItemArray[8] && 
        ItemArray[0] !== "empty"
      ){
        setwinnerMsg(`Yeah  ${ItemArray[0]} won :)`)
    }else if(
        ItemArray[2] === ItemArray[4] && 
        ItemArray[4] === ItemArray[6] && 
        ItemArray[2] !== "empty"
      ){
        setwinnerMsg(`Yo  ${ItemArray[2]} won :)`)
    }else if(!ItemArray.includes("empty") && !winnerMsg){ 
      
        setwinnerMsg(`Match Draw :( `)
    
  }
    // 
  }

  const checkItemChange = Itemnumber => {
    if(winnerMsg){
      return toast(winnerMsg, {type : "success"});
    }
    if(ItemArray[Itemnumber] === "empty"){
      ItemArray[Itemnumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross); 
    }else{
      return toast("Already Done", {type:"error"})
    }  
    checkWinner();
  }

  const reloadGame = () => {
    setIsCross(false);
    setwinnerMsg("");
    ItemArray.fill("empty", 0 ,9)
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col className="col-md-6 offset-md-3">
          {winnerMsg ? (
            <div className="mb-3 mb-3">
              <h1 className="text-center fcColor mb-2">{winnerMsg}</h1>
              <Button onClick={reloadGame} className="btn-block btn-info">Play Again</Button>
            </div>
          ) : (
            <h1 className="text-center fcColor mb-5">
              {isCross ? "Cross" : "Circle"} turns 
            </h1>
          )}
          <div className="grid">
            {ItemArray.map((item,index) => (
              <Card onClick={()=> checkItemChange(index)} key={index}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <div className="footer">
        <h3>{appName}</h3>
          <p className="text-center">
            <a href="https://vipinsingh-portfolio.web.app" target="_blank">
              https://vipinsingh-portfolio.web.app
            </a>
          </p>
        </div>
    </Container>
  );
}

export default App;

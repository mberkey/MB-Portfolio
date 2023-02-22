import React, {Component} from "react";
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
import Me from '../images/meGC.jpg';
const listGroupColor = {backgroundColor: "#1D1F21"
                        ,color: '#f8f8f2'};

export default class About extends Component {
    render(){
        return(
            <>
               
                <Container>
                    <Row>
                        <Col>
                            <div className="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-left">
                                <div className="h-80 p-3 about">
                                    <h2>Who is <b>Matt Berkey</b></h2>
                                </div>
                            </div>
                        </Col>
                        
                        <Col>
                        <br/>
                        <br/>
                            <img src={Me} className='img-fluid' id='myPic' alt='...' />                            
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <p className='Dets'>Just a Guy Living and Working in NW Ohio Area <br/></p>
                            <p>I am a Systems Software Engineer currently employed at Norplas Industries a manufactoring plant.
                            <br/>I spend my time Designing, Developing, Maintaining: <br/></p>
                            
                            
                                <ListGroup id='listAbout'>                                
                                    <ListGroup.Item style={listGroupColor}>•	Inventory and System Control applications as Windows Console applications, Single Page web applications and Mobile Web apps written in VB.NET, C#, React/Node and Typescript all relying on Web services and APIs to get data from our SQL Databases.</ListGroup.Item>
                                    <ListGroup.Item style={listGroupColor}>•	SQL Database Administration, Query Optimization, Debugging </ListGroup.Item>
                                    <ListGroup.Item style={listGroupColor}>•	IIS Administration, and Much More... </ListGroup.Item>                                 
                                </ListGroup>                             
                                
                            
                            <p className='Dets'>Loves Gaming and Poker</p>                            
                        </Col>    
                    </Row>                   
                </Container>
              
            </>
        )
    }
}
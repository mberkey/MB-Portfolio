import React, {Component} from "react";
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
import Me from '../images/meGC.jpg';
const listGroupColor = {backgroundColor: "#1D1F21"
                        ,color: '#f8f8f2'};

export default class About extends Component {
    render(){
        return(
            <>
                <div className="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
                <Container>
                    <Row>
                            <Col>
                                <div className="h-80 p-3 about">
                                    <h2>Who is <b>Matt Berkey</b></h2>
                                </div>
                            </Col>
                            <Col>
                                <p className='Dets'>Just a Guy Living and Working in NW Ohio area. (Go Rockets!)  <br/></p>
                                <p className='Dets'>A Systems Software Engineer at Norplas Industries Designing, Developing, Maintaining: <br/></p>
                                
                                
                                    <ListGroup id='listAbout'>                                
                                        <ListGroup.Item style={listGroupColor}>•	Inventory and System Control applications as Console applications, Single Page applications and Mobile Web apps written in VB, React and Typescript all relying on Web services and APIs to get data from our SQL Databases.</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	SQL Database Administration, Query Optimization, Debugging </ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Web Apps and MUCH more.</ListGroup.Item>                                 
                                    </ListGroup>                             
                                    
                                
                                <p className='Dets'>Loves Gaming and Poker</p>                            
                            </Col>
                            <Col>
                                <img src={Me} className='img-fluid' id='myPic' alt='...' />                            
                                <br/>
                                <p className='ogQuote'>I will persist. I will win. <br/> - Og Mandino</p>
                            </Col>
                    </Row>                    
                </Container>
                </div>
            </>
        )
    }
}
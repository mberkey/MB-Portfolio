import React, {Component} from "react";
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
import Me from '../images/meGC.jpg';
const listGroupColor = {backgroundColor: "#1D1F21"
                        ,color: '#f8f8f2'};

export default class About extends Component {
    render(){
        return(
            <>
                <div class="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
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
                                        <ListGroup.Item style={listGroupColor}>•	Inventory Control Applications</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	SQL Databases</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Web Apps and MUCH more.</ListGroup.Item>                                 
                                    </ListGroup>                             
                                    
                                
                                <p class='Dets'>Loves Gaming and Poker</p>                            
                                <img src={Me} className='img-fluid' id='myPic' alt='...' />                            
                                <br/>
                                <p class='ogQuote'>I will persist. I will win. <br/> - Og Mandino</p>
                            </Col>
                    </Row>                    
                </Container>
                </div>
            </>
        )
    }
}
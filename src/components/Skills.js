import React, {Component} from "react";
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
const listGroupColor = {backgroundColor: "#1D1F21"
                        ,color: '#f8f8f2'};
export default class Skills extends Component {
    render(){
        return(
            <>
                <div class="jumbotron m-6 p-2 mb-1 fluid text-start">
                <Container>
                    <Row>
                            <Col >
                                <div className="h-80 p-3" >
                                    <h2>What technical <b>skills</b> does he have?</h2>                                                                                                                    
                                </div>
                            </Col>
                            <Col>
                        
                            <Row className='align-items-start'>
                                <p id='skills'>Not To Brag But Here's A Few<br/></p>  
                            </Row>
                            <Row>
                                <Col>
                                    <ListGroup className='text-start'>                                
                                        <ListGroup.Item style={listGroupColor}>•	SQL Server</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Database Management</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Vb.Net</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Debugging</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Javascript</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	React</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•    IIS Server Management</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	Android</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	UI Design</ListGroup.Item>
                                        <ListGroup.Item style={listGroupColor}>•	ETL's</ListGroup.Item>
                                    </ListGroup>                             
                                </Col>

                                <Col>
                                    <p id='blurb'>A great developers true value lies in being able to understand the subject matter at hand<br/> and provide a technical expertise to bring ideas to fruition in an elegant and efficient manner.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>   
                </div> 
            </>
        )
    }
}
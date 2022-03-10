import React, {Component} from "react";

import { Container,Row, Col } from "react-bootstrap";

const cryptoJobLink = "https://cryptojobslist.com/talent/profile/crypto-professional-remote-pccj9fvkpb";
const gitHubLink = "https://github.com/mberkey?tab=repositories";

export default class Contact extends Component {
    render(){
        return(

            <div class="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
            <div class="col-md-12">
                <div className="h-80 p-3 contact">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <h2>Contact Via <b>Email</b></h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <a href="mailto:matthew.berkey@hotmail.com" className='contactLink'>matthew.berkey@hotmail.com</a>                    
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">                            
                            <Col md="auto">
                                <h3>OR</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <a href={cryptoJobLink} target="_blank" className='contactLink' rel="noopener">Hire me on <b>Crypto Jobs</b> List</a>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <h3>ALSO</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <a href={gitHubLink}  target="_blank" className='contactLink' rel="noopener">Yes, I have a <b>GitHub</b></a>
                            </Col>
                        </Row>
                 </div>
                 
            </div> 
        </div>
  
        )
    }
}
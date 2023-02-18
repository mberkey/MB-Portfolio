import React, {Component} from "react";

import { Row, Container, Col } from "react-bootstrap";

const cryptoJobLink = "https://cryptojobslist.com/talent/profile/crypto-professional-remote-pccj9fvkpb";
const gitHubLink = "https://github.com/mberkey?tab=repositories";
const linkedInLink = "www.linkedin.com/in/matthew-berkey-0566506b"
export default class Contact extends Component {
    render(){
        return(        
            
        <div className="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
            <div className="col-md-12">
                <div className="h-80 p-3 contact">
                <Container>
                <Row>                    
                    <Col><h2>Contact <b>Me</b></h2></Col>
                    <Col style={{disply:'flex', align:'start'}}> 
                        <Row> 
                            <Col>
                                <a href="mailto:matthew.berkey@hotmail.com" className='contactLink'>matthew.berkey@hotmail.com</a>
                                
                                <a href={cryptoJobLink} target="_blank" className='contactLink' >Hire me on <b>Crypto Jobs</b> List</a>
                            
                                <a href={gitHubLink}  target="_blank" className='contactLink' rel="noopener">Yes, I have a <b>GitHub</b></a>

                                <a href={linkedInLink}  target="_blank" className='contactLink' rel="noopener">Here is my <b>LinkedIN</b></a>
                                
                            </Col>
                        </Row>
                   </Col>
                </Row>
                </Container>
           
                        
                
                </div>                 
            </div> 
        </div>
  
        )
    }
}
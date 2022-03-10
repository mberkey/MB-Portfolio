import React from "react";
import  { Link } from 'react-router-dom';
import { Container, Row, Col} from "react-bootstrap";

const linkStyle = {
    textDecoration: 'none'  
  }

  
const contact = <Link id='contactLink' className='navLink' style={linkStyle} to='/Contact'><p><b>here</b></p></Link>
const Experience = () =>{

        return(
        <div className="jumbotron m-8 p-2 mb-1 fluid text-start">
            <Container>
                <Row>
                    <Col >
                        <h2>How about <b>experience</b>?</h2>
                    </Col>
                    <Col className="experience">
                                    <p>2018 - Present</p> 
                                    <h5>Systems Software Engineer - Norplas Industries</h5>   
                                    <br />
                                    <p>2016 - 2018</p> 
                                    <h5>Software Developer II - Emprise Technologies</h5>
                                    <br />   
                                    <p>2016</p> 
                                    <h5>Graduate of Univ. Of Toledo</h5>  
                                    <h5>Bachelor of Science in Computer Science & Engineering Technology</h5>
                                    <br />   
                                    <p >Blockchain & Web3 Portfolio Loading...</p>
                                    <br /> 
                                    <br /> 
                                    <p>If you're still reading, first of all <b>thank you</b>, hope you like my page.<br/> If would like to know more about me and how my skills could be useful to you click {contact}!</p>
                    </Col>
                </Row>
        </Container>  
    </div>
        )
  
}

export default Experience
import React,{useState} from "react";
import {Container, Row, Col, Carousel, CarouselItem} from 'react-bootstrap';

const popSkills = {
    color: '#ff5555'
}

const Skills =()=> {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
        return(
            <>
                <div className="jumbotron m-6 p-2 mb-1 fluid text-start">
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
                                        <Carousel activeIndex={index} onSelect={handleSelect} controls={true} nextIcon={<></>}>
                                            <CarouselItem>
                                            Modern Front End solutions like <span style={popSkills}><b>React</b></span>, <span style={popSkills}><b>Typescript</b></span>, <span style={popSkills}><b>JavaScript.</b></span>                                
                                            </CarouselItem>
                                            <CarouselItem>
                                            Expertise with <span style={popSkills}><b>HTML</b></span> and <span style={popSkills}><b>CSS</b></span>
                                            </CarouselItem>                                        
                                            <CarouselItem>
                                            <span style={popSkills}><b>SQL Database Administration</b></span> creating, maintaining, and optimizing queries, databases, tables, stored procedures, and views.  
                                            </CarouselItem>
                                            <CarouselItem>
                                            Object Oriented Languages: <span style={popSkills}><b>C#</b></span> and <span style={popSkills}><b>VB.NET</b></span> utilized as creating <span style={popSkills}><b>APIs</b></span> and <span style={popSkills}><b>Web Services</b></span> for various applications. As well as standalone console applications.
                                            </CarouselItem>
                                            <CarouselItem>
                                            Proficient in identifying and resolving issues in various applications and frameworks through effective <span style={popSkills}><b>debugging</b></span> techniques.
                                            </CarouselItem>
                                            <CarouselItem>
                                            <span style={popSkills}><b>IIS Server Management</b></span>
                                            </CarouselItem>
                                            <CarouselItem>
                                            Proficient with <span style={popSkills}><b>GitHub</b></span>, <span style={popSkills}><b>Azure DevOps</b></span> for version control and Continuous Integration, and experience with <span style={popSkills}><b>Azure Cloud</b></span>.
                                            </CarouselItem>                                        
                                            <CarouselItem>
                                            A passion for learning new technologies, languages and frameworks to better my <span style={popSkills}><b>abilities</b></span>  and grow my toolbox when tackling complex real world problems.
                                            </CarouselItem>
                                            <CarouselItem>
                                            More details and information with request.
                                            </CarouselItem>
                                        </Carousel>                                                   
                                    </Row>

                                    <Row>
                                        <p id='blurb'>A great developers true value lies in being able to understand the subject matter at hand<br/> and provide a technical expertise to bring ideas to fruition in an elegant and efficient manner.</p>
                               
                                </Row>
                            </Col>
                        </Row>
                    </Container>  
                </div> 
            </>
        )
    }
export default Skills;

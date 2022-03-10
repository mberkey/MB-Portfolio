import React, {Component} from "react";
import { Carousel, Container,Row, Col } from "react-bootstrap";
import Bork  from '../images/bork.jpg';
import Nars from '../images/nars.jpg';
import Noodle from '../images/noodle.jpg';


export default class Doggos extends Component {
    render(){
        return(
            <>
                <div className="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
                <Container>
                    <Row>
                            <Col >
                                <h2>Meet the <b>pack</b></h2>
                            </Col>
                    
                            <Col >
                                <p className='Dets'>Sterling, Scarlette & Sasha</p>
                                <Carousel controls={false} >
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Bork}
                                    alt="Sterling"
                                    />
                                    <Carousel.Caption>
                                    <p><b>Looks tough, actually Mommas boy</b></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Nars}
                                    alt="Scarlette"
                                    />
                                    <Carousel.Caption>
                                    <p><b>Looks like a dog, is actually a velociraptor</b></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Noodle}
                                    alt="Sasha"
                                    />
                                    <Carousel.Caption>                            
                                    <p><b>Professional snack beggar</b></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row> 
                    </Container> 
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </>
        )
    }
}

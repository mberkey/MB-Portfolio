import React, {Component} from "react";
import {Col} from 'react-bootstrap';

export default class Footer extends Component {
    render(){
        return(
            <div>
                <Col className='col-md text-center footer'>
                    <p className='text-muted align-center'>&copy; 2022 Matt Berkey</p>
                </Col>
            </div>
        )
    }
}

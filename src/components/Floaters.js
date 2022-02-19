import React, {Component} from 'react';
import { CodeSlash , Braces, Slash , EnvelopeCheck} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';
const linkStyle = {
    textDecoration: 'none'  
    , color: '#50fa7b' 
  }


const hello = <Link style={linkStyle} to='/Hello'><House/></Link>
const about = <Link style={linkStyle} to='/About'>About</Link>
const skills = <Link style={linkStyle} to='/Skills'>Skills</Link>
const experience = <Link style={linkStyle} to='/Experience'>Experience</Link>
const doggo = <Link style={linkStyle} to='/Doggo'>Pups</Link>
const contact = <Link style={linkStyle} to='/Contact'><EnvelopeCheck/></Link>

export default class Floaters extends Component {
    render() {
        return(
            <>
            <ul className="floaters">                            
                <li><CodeSlash /></li>
                <li>;</li>
                <li className="floaty">{about}</li>       
                <li className="floaty">{hello}</li>
                <li>//</li>
                <li>[ ]</li>
                <li className="floaty">{skills}</li>  
                <li><Braces/></li>
                <li className="floaty">{doggo}</li>
                <li><Slash /></li>
                <li className="floaty">{experience}</li>
                <li className="floaty">{contact}</li>
            </ul>
            
            </>
        )
    }
}
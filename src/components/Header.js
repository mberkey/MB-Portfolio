import React, { useState} from "react";
import { Link } from 'react-router-dom';
import { House, EnvelopeCheck , Play, Pause} from 'react-bootstrap-icons';
import { Navbar, Nav, Container , Button, ButtonGroup} from 'react-bootstrap';

const linkStyle = {
  textDecoration: 'none'  
  , color: '#50fa7b' 
}

const btnStyle = {
  color: '#50fa7b' 
  , backgroundColor: '#1D1F21'
  , border: 'none'
  , outline:0
}

const hello = <Link className='navLink' style={linkStyle} to='/Hello'><House/></Link>
const about = <Link className='navLink' style={linkStyle} to='/About'>About</Link>
const skills = <Link className='navLink' style={linkStyle} to='/Skills'>Skills</Link>
const experience = <Link className='navLink' style={linkStyle} to='/Experience'>Experience</Link>
const doggo = <Link className='navLink' style={linkStyle} to='/Doggo'>Pups</Link>
const contact = <Link className='navLink' style={linkStyle} to='/Contact'><EnvelopeCheck/></Link>
const Header = () => {

  const [toggleAnimation, setAnimation] = useState('running');

  function executeBtnClick(){
      let setToggleAnimation;
      
      setToggleAnimation = toggleAnimation === 'paused' ? 'running' : 'paused';

    setAnimation(setToggleAnimation);
    console.log(toggleAnimation);
    
    let liElems = document.getElementsByTagName('li');
    console.log(liElems.length);
    for(let li of liElems){
        li.style.animationPlayState = toggleAnimation;
    }
    
  }
    return(
        <Navbar bg="" variant="dark">
          <Container fluid >
            <Nav>
            <ButtonGroup size='lg' >
              <Button  style={btnStyle}>{hello}</Button>
              <Button  style={btnStyle}>{about}</Button>
              <Button  style={btnStyle}>{skills}</Button>
              <Button  style={btnStyle}>{experience}</Button>
              <Button  style={btnStyle}>{doggo}</Button>              
              <Button  style={btnStyle}>{contact}</Button>            
              <Button  style={btnStyle} onClick={executeBtnClick}>< Play/>/<Pause/></Button>  
            </ButtonGroup>
        
            </Nav>
          </Container>
        </Navbar>
    )
  }
export default Header;
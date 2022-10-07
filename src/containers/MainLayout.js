import React, {Component} from "react";
import Skills from '../components/Skills';
import About from '../components/About';
import Hello from '../components/Hello';
import Doggo from '../components/Doggo';
import Floaters from '../components/Floaters';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default class MainLayout extends Component {

    render(){
        return(
            <>                   
                <BrowserRouter>
                     <Header />  
                     <Routes>                                                             
                        <Route exact path='/' element={<Hello />}/>                        
                        <Route exact path='Hello' element={<Hello />}/>                                               
                        <Route path='About' element={<About />}/>
                        <Route path='Skills' element={<Skills />}/>
                        <Route path='Experience' element={<Experience />}/>
                        <Route path='Doggo' element={<Doggo />}/>            
                        <Route path='Contact' element={<Contact />}/>            
                    </Routes>     
                    <br />
                    <br />
                    <br />
                    <br />
                    <Floaters />                  
                  
                </BrowserRouter>                
            </>
        )
    }
}
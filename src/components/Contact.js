import React, {Component} from "react";

const linkStyle = {
  textDecoration: 'none'  
  , color: '#ff5555' 
}

export default class Contact extends Component {
    render(){
        return(

            <div class="jumbotron m-6 p-2 mb-1 fluid rounded-3 text-center">
            <div class="col-md-12">
                <div className="h-80 p-3" className='contact'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Contact Via <b>Email</b></h2>
                    <a href="mailto:matthew.berkey@hotmail.com" className='navLink' style={linkStyle}><span id='email'>matthew.berkey@hotmail.com</span></a>
                 </div> 
            </div> 
        </div>
  
        )
    }
}
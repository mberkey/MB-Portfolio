import React, {Component} from 'react'

export default class Hello extends Component {
    render(){        
           return(
            <>        
                <div className="jumbotron m-9 p-5 mb-4 fluid text-align-right">
                    <div className="col-md-12">
                        <div className="h-50 p-5 text-left hello">
                         <h1>Hey, I'm <b>Matt</b></h1>
                         <p>Systems Software Engineer <br /> Blockchain Enthusiast <br />Doggo Dad </p>                                               
                         <br />
                         <br />
                         <br />
                         <br />     
                         <p><i>“Any fool can write code that a computer can understand.<br /> Good programmers write code that humans can understand.”<br /></i> - Martin Fowler.</p>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
}
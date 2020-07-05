import React from 'react';
import './chat-app.css';


function Contact(){
    return (
    <div className = "Contact">
       <img className = "avatar" src = "https://randomuser.me/api/portraits/men/40.jpg"/>
       <div className = "status">
          <h2 className = "name">Marvin Marshall</h2>
          <h3 className ="status-online">Online</h3>
      </div>  
    </div>

    )

}

export default  Contact;
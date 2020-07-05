import PropTypes from 'prop-types';
import React from 'react';
import './chat-app.css';


function Contact(props){
    return (
    <div className = "Contact">
       <img  className = "avatar" src = {props.avatar} alt = {props.name}/>
       <div className = "status">
          <h2 className = "name">{props.name}</h2>
          <h3 className = "status-online">{props.statusOnline ? 'online' : 'offline'}</h3>
          
      </div>  
    </div>

    )

}
Contact.propTypes = {
    statusOnline: PropTypes.string.isRequired,
    statusOffline: PropTypes.string.isRequired,
  };

export default  Contact;
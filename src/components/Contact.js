import PropTypes from 'prop-types';
import React from 'react';
import './chat-app.css';


function Contact(props){
    return (
    <div className = "Contact">
       <img  className = "avatar" src = {props.avatar} alt = {props.name}/>

       <div className = "status">
          <h2 className = "name">{props.name}</h2>
          <p className = {props.status ? "status-online" : "status-offline"}/>
          <p className = "status-text">{props.status? "Online" : "Offline"}</p>
       </div> 
    </div>

    )

}
Contact.propTypes = {
    name : PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,   
  };

export default  Contact;
import PropTypes from 'prop-types';
import React from 'react';
import './chat-app.css';


class Contact extends React.Component{
   constructor(props){
      super(props)
      this.state = {online : props.online}   }
   render(){
      return (
    <div className = "Contact">
       <img  className = "avatar" src = {this.props.avatar} alt = {this.props.name}/>

       <div className = "status" onClick = {event => {
             const newOnline = !this.state.online;
             this.setState({online : newOnline})
          }
         }>
          <h2 className = "name">{this.props.name}</h2>
          <div className = {this.state.online ? "status-online" : "status-offline"}
          />
          <div className = "status-text">{this.state.online? "Online" : "Offline"}</div>
       </div> 
    </div>

    )
   }
    

}
Contact.propTypes = {
    name : PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,   
  };

export default  Contact;
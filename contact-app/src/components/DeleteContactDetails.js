import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user1.png";


const DeleteContactDetails = (props) =>{
    const {id, name, email } = props.location.state.contact;
    return (
 <div className="main">
     <div className="ui card centered">
         <div className="content">
             <div className="image"><img src={ user } alt="user"/></div>
             <div className="header">{name}</div>
             <div className="description">{email}</div>
         </div>
     </div>
     <div className="container">
         <Link to="">
         <button className="ui button red center"  onClick = {() => props.clickHandler(id)}>Delete</button>
         </Link>
         <Link to="/">
         <button className="ui button green center">Cancel</button>
         </Link>
     </div>
     <div className="center-div" >
         <Link to="/">
             <button className="ui button blue center">Back to Contact List</button>
        </Link>
     </div>
 </div>

    );
};
export default DeleteContactDetails;
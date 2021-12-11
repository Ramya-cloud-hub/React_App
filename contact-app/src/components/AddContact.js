import React from "react";

class AddContact extends React.Component{

    state= {
        name: "",
        email: "",
    };
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
        alert("All the fields are mandatory!");
        return;
        }
        this.props.addContactHandler(this.state);  
        this.setState({name:"",email:""}) //set fields empty after adding value i.e clear the fields we use setState function
        this.props.history.push("/"); //this will avoid creating new browser page loading after remove 
        //the fields it will go to contact gape when you hit add button this is how we navigate from one components to another
    } //Code for add function(Add button) how it works
       
    render(){
    return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}/>  
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                         type="text" 
                         name="email" 
                         placeholder="xyz@gmail.com"
                         value={this.state.email}
                         onChange={(e) =>this.setState({email:e.target.value})}/>
                    </div>
                    <button className="ui button blue">ADD</button>
                </form>
            </div>
    );
    }
}

export default AddContact;
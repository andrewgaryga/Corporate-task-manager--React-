import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      message: "",
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.name, this.state.surname, this.state.message);
  };
  render() {
    return (
      <form className="form-styled" onSubmit={this.handleSubmit} id={this.props.id}>
        <div className="form-group">
          <h5 className="form-header">Add new item</h5>
          <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} required/>
          <input name="surname" type="text" placeholder="Surname" value={this.state.surname} onChange={this.handleChange} required/>
          <textarea name="message" id="" cols="30" rows="3" placeholder="Message" value={this.state.message} onChange={this.handleChange} required></textarea>
          <button>Add</button>
        </div>
      </form> 
    )
  }
}

export default TodoInput;

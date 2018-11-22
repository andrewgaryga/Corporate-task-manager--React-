import React from "react";

function TodoInput(props) {
  return (
    <form className="form-styled">
      <div className="form-group">
        <h5 className="form-header">Add new item</h5>
        <input name="name" type="text" placeholder="Name" value={props.name} onChange={props.handleChange} required/>
        <input name="surname" type="text" placeholder="Surname" value={props.surname} onChange={props.handleChange} required/>
        <textarea name="message" id="" cols="30" rows="3" placeholder="Message" value={props.message} onChange={props.handleChange} required></textarea>
        <button onClick={props.handleAdd}>Add</button>
        {/* <button type="button" onClick={props.handleAdd} className={props.validateInput() ? '' : 'disabled'}>Add</button>   */}
      </div>
    </form> 
  );
}

export default TodoInput;

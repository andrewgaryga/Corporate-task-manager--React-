import React from "react";

function TodoInput(props) {
  return (
    <div className="form-group form-styled">
      <h5 className="form-header">Add new item</h5>
      <input name="name" type="text" placeholder="Name" value={props.name} onChange={props.handleChange} />
      <input name="surname" type="text" placeholder="Surname" value={props.surname} onChange={props.handleChange} />
      <textarea name="message" id="" cols="30" rows="3" placeholder="Message" value={props.message} onChange={props.handleChange}></textarea>
      <button type="button" onClick={props.handleAdd} className={props.validateInput() ? '' : 'disabled'}>Add</button>
      
    </div>
  );
}

export default TodoInput;

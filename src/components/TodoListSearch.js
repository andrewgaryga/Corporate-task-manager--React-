import React from "react";

function TodoSearch(props) {
  return (
    <div className="form form-search">
      <i className="fas fa-search"></i><input name="search" type="text" className="search" onChange={props.handleChange} value={props.filterText}></input>
    </div>                            
  );
}

export default TodoSearch;

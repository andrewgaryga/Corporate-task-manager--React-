import React from "react";

function TodoItem(props) {
  if (!props.display) {
    return null;
  } 
  if (props.textMatch) {
    return (
      <article className={props.isCompleted ? "card completed" : "card"}>
        <h6 className="card-author text-small">
          {props.name} {props.surname} <span className="date">{props.date}</span>
        </h6>
        <div className="card-body">
          {props.textMatchStart}<span className="highlighted">{props.textMatch}</span>{props.textMatchEnd}
        </div>

        <div className="card-footer">
          <button
            className={props.isCompleted ? "text-small btn-uncomplete" : "text-small btn-complete"}
            onClick={() => { props.handleToggleComplete(); }}
          >
            {props.isCompleted ? "Uncomplete" : "Complete"}
          </button>
          <button
            className="btn-remove text-small"
            onClick={() => { props.handleDelete(props.inputKey); }}
          >
            Remove
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <article className={props.isCompleted ? "card completed" : "card"}>
        <h6 className="card-author text-small">
          {props.name} {props.surname} <span className="date">{props.date}</span>
        </h6>
        <div className="card-body">
          {props.message}
        </div>

        <div className="card-footer">
          <button
            className={props.isCompleted ? "text-small btn-uncomplete" : "text-small btn-complete"}
            onClick={() => { props.handleToggleComplete(); }}
          >
            {props.isCompleted ? "Uncomplete" : "Complete"}
          </button>
          <button
            className="btn-remove text-small"
            onClick={() => { props.handleDelete(props.inputKey); }}
          >
            Remove
          </button>
        </div>
      </article>
    );
  }
}

export default TodoItem;

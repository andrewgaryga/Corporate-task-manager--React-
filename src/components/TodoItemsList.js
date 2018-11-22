import React from "react";
import TodoItem from "./TodoItem";

function TodoItemsList(props) {
  return (
    <React.Fragment>
      {props.todoItems.map((item, index) => {
        return (
          <TodoItem
            handleToggleComplete={() => {
              props.handleToggleComplete(index);
            }}
            handleDelete={props.handleDelete}
            name={item.name}
            surname={item.surname}
            message={item.message}
            date={item.date}
            textMatchStart={item.textMatchStart}
            textMatch={item.textMatch}
            textMatchEnd={item.textMatchEnd}
            isCompleted={item.isCompleted}
            display={item.display}
            key={item.key}
            inputKey={item.key}
          />
        );
      })}
    </React.Fragment>
  );
}

export default TodoItemsList;
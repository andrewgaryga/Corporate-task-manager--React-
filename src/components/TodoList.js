import React, { PureComponent } from "react";
import TodoListSearch from "./TodoListSearch"

class TodoList extends PureComponent {
  // State only needs to hold the current filter text value:
  state = {
    filterText: ""
  };

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // The render method on this PureComponent is called only if
    // props.list or state.filterText has changed.

    const filteredList = this.props.todoItems.filter(
      item => item.message.includes(this.state.filterText)
    )

    return (
      <React.Fragment>
        <TodoListSearch handleChange={this.handleChange} filterText={this.state.filterText}/>

        {filteredList.map((item, index) => {
          if (!item.display) {
            return null;
          } 
          return (
            <article key={item.id} className={item.isCompleted ? "card completed" : "card"}>
            <h6 className="card-author text-small">
              {item.name} {item.surname} <span className="date">{item.date}</span>
            </h6>
            <div className="card-body">
              {item.message}
            </div>

            <div className="card-footer">
              <button
                className={item.isCompleted ? "text-small btn-uncomplete" : "text-small btn-complete"}
                onClick={() => { this.props.toggleComplete(item.id); }}
              >
                {item.isCompleted ? "Uncomplete" : "Complete"}
              </button>
              <button
                className="btn-remove text-small"
                onClick={() => { this.props.toggleDelete(item.id); }}
              >
                Remove
              </button>
            </div>
          </article>
          )
        })}
      </React.Fragment>
    );
  }
}

export default TodoList;
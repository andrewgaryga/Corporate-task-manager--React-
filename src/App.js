import React, { Component } from "react";

import TodoItemsList from "./components/TodoItemsList";
import TodoInput from "./components/TodoInput";
import TodoSearch from "./components/TodoSearch";
import "./App.css";
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      message: "",
      isSubmitted: false,
      key: 2,
      todoItems: [
        {
          name: "Andrew",
          surname: "anime",
          message: "Hello World!",
          date: '12.10.2018',
          key: 1,
          isCompleted: false,
          display: true,
          textMatchStart: "",
          textMatch: false,
          textMatchEnd: ""
        },
        {
          name: "Yura",
          surname: "notanime",
          message: "Hello World!",
          date: '12.10.2018',
          key: 2,
          isCompleted: true,
          display: true,
          textMatchStart: "",
          textMatch: false,
          textMatchEnd: ""
        }
      ]
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleAdd = e => {
    e.preventDefault();
    let newKey = uuidv4();
    console.log(newKey);
    console.log(this);
    console.log(e);
    // newKey++;
    this.setState({ isSubmitted: true, key: newKey });
    this.setState({
      todoItems: [
        {
          name: this.state.name,
          surname: this.state.surname,
          message: this.state.message,
          date: this.getCurDate(),
          key: newKey,
          isCompleted: false,
          display: true,
          textMatchStart: "",
          textMatch: false,
          textMatchEnd: ""
        },
        ...this.state.todoItems
      ]
    });
  };

  // validateInput = () => {
  //   if (this.state.name && this.state.surname && this.state.message) {
  //     console.log('true');
  //     return true;
  //   }
  //   console.log('false');
  //   return false;
  // }

  getCurDate = () => {
    var today = new Date();
    return `${(today.getDate() < 10) ? '0' + today.getDate() : today.getDate()}.${( today.getMonth() + 1 < 10) ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)}.${today.getFullYear()}`;
  }

  toggleComplete = index => {
    let arrCopy = [...this.state.todoItems];
    arrCopy[index].isCompleted = !arrCopy[index].isCompleted;
    this.setState({
      todoItems: arrCopy
    });
  };

  toggleDelete = (inputKey) => {
    let arrCopy = [...this.state.todoItems];
    console.log(inputKey);
    this.setState({
      todoItems: arrCopy.filter(
        // cur => cur.name !== inputName && cur.surname !== inputSurname
        cur => cur.key !== inputKey
      )
    });
  };

  handleSearch = e => {
    let arrCopy = this.state.todoItems.map(item => {
      let filterValue = "";
      for (let value of e.target.value) {
        filterValue +=
          item.message[item.message.toUpperCase().indexOf(value.toUpperCase())];
      }
      console.log(filterValue);
      if (!e.target.value) {
        item.textMatch = false;
        item.textMatchStart = "";
        item.textMatchEnd = "";
        item.display = true;

        return item;
      } else if (
        item.message.toUpperCase().indexOf(filterValue.toUpperCase()) > -1
      ) {
        item.textMatch = filterValue;
        item.display = true;

        return item;
      } else {
        item.display = false;
        return item;
      }
    });

    if (!e.target.value) {
      this.setState({
        todoItems: arrCopy
      });
    } else {
      this.setState({
        todoItems: this.highlightTextMatch(arrCopy)
      });
    }
  };

  highlightTextMatch = arr => {
    let arrResult = [];
    arrResult = arr.map(item => {
      if (item.display && item.textMatch) {
        let filterValue = item.textMatch.toUpperCase();
        item.textMatchStart = item.message.slice(
          0,
          item.message.toUpperCase().indexOf(filterValue)
        );
        item.textMatchEnd = item.message.slice(
          item.message.toUpperCase().indexOf(filterValue) +
            item.textMatch.length,
          item.message.length
        );
        return item;
      } else {
        return item;
      }
    });

    return arrResult;
  };

  render() {
    return (
        <div className="container">
          <main className="card-container">
            <TodoSearch handleSearch={this.handleSearch} />
            <TodoItemsList
              todoItems={this.state.todoItems}
              handleDelete={(inputKey) => {
                this.toggleDelete(inputKey);
              }}
              handleToggleComplete={this.toggleComplete}
            />
          </main>
          <aside className="sidebar">
            <TodoInput
              name={this.state.name}
              surname={this.state.surname}
              message={this.state.mesage}
              handleChange={this.handleChange}
              // validateInput={this.validateInput}
              handleAdd={this.handleAdd}
            />
          </aside>

          <footer>
            <div className="copyright">&copy; 2018</div>
          </footer>
        </div>  
    );
  }
}

export default App;

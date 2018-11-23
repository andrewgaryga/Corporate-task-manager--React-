import React, { Component } from "react";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Switch from "./components/Switch";
import Counter from "./components/Counter";
import "./App.css";
import uuidv4 from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfState: "local",
      cur: 0,
      todoItems: [
        {
          name: "Andrew",
          surname: "Ivanov",
          message: "Refactor main code",
          date: "11.10.2018",
          id: 1,
          isCompleted: false,
          display: true
        },
        {
          name: "Fedor",
          surname: "Andreev",
          message: "Draw new logo",
          date: "10.10.2018",
          id: 2,
          isCompleted: false,
          display: true
        },
        {
          name: "Yura",
          surname: "Fedorov",
          message: "Fix the coffee machine",
          date: "12.10.2018",
          id: 3,
          isCompleted: false,
          display: true
        },
        {
          name: "Vova",
          surname: "Danilov",
          message: "Perform code review",
          date: "13.10.2018",
          id: 4,
          isCompleted: true,
          display: true
        }
      ]
    };
  }

  handleAdd = (name, surname, message) => {
    let newKey = uuidv4();
    this.setState({
      todoItems: [
        {
          name: name,
          surname: surname,
          message: message,
          date: this.getCurDate(),
          id: newKey,
          isCompleted: false,
          display: true
        },
        ...this.state.todoItems
      ]
    });
  };

  getCurDate = () => {
    var today = new Date();
    return `${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}.${today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1}.${today.getFullYear()}`;
  };

  toggleComplete = id => {
    let arrCopy = this.state.todoItems.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
        return item;
      }
      return item;
    });
    this.setState({
      todoItems: arrCopy
    });
  };

  toggleDelete = inputKey => {
    let arrCopy = [...this.state.todoItems];
    this.setState({
      todoItems: arrCopy.filter(cur => cur.id !== inputKey)
    });
  };

  handleTypeOfState = status => {
    if (status) {
      this.setState({
        typeOfState: "global"
      });
    } else {
      this.setState({
        typeOfState: "local"
      });
    }
  };

  handleGlobalState = operator => {
    if (operator === "+") {
      this.setState({
        cur: this.state.cur + 1
      });
    } else if (operator === "-") {
      this.setState({
        cur: this.state.cur - 1
      });
    } else {
      console.log("Wrong operator passed from Counter component");
    }
  };

  render() {
    return (
      <div className="container">
        <main className="card-container">
          <TodoList
            todoItems={this.state.todoItems}
            toggleComplete={this.toggleComplete}
            toggleDelete={this.toggleDelete}
          />
        </main>
        <aside className="sidebar">
          <div style={{backgroundColor: "white", padding: "20px", marginBottom: "15px"}}
          >
            <Switch
              typeOfState={this.state.typeOfState}
              handleTypeOfState={this.handleTypeOfState}
            />
            <Counter
              cur={this.state.cur}
              typeOfState={this.state.typeOfState}
              handleGlobalState={this.handleGlobalState}
            />
            <Counter
              cur={this.state.cur}
              typeOfState={this.state.typeOfState}
              handleGlobalState={this.handleGlobalState}
            />
          </div>
          <TodoInput handleAdd={this.handleAdd} id="myForm" />
        </aside>

        <footer>
          <div className="copyright">&copy; 2018</div>
        </footer>
      </div>
    );
  }
}

export default App;

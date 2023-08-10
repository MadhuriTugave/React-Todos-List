import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Home from "./MyComponents/Home";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  // when i am initiliza
  let storage;
  if (localStorage.getItem("todos") === null) {
    storage = [];
    // console.log(storage)
  } else {
    storage = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(storage);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <HashRouter>
        <Header title="My todo-list" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route
            exact
            path="/home"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                <Footer />
              </>
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>

      
      </HashRouter>
    </div>
  );
}

export default App;

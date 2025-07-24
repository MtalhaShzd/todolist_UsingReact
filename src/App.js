import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import { Addtodo } from "./MyComponents/Addtodo";
import { About } from "./MyComponents/About"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo = [];

  if (localStorage.getItem("todos")) {
    try {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      initTodo = [];
    }
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);  

  const onDelete = (todo) => {
    console.log("I am deleting", todo);
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Adding ToDo:", title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos((prevTodos) => [...prevTodos, myTodo]);
  };

  return (
    <Router>
      <Header title="My Todos List" searchbar={false} />
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <>
              <Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

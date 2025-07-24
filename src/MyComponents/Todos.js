import React from 'react';
import { Todoitems } from './Todoitems';

export const Todos = (props) => {
  let myStyle ={
      minHeight : "70vh",
      margin: "40px auto"
  }
  return (
    <div className="container my-3" style = {myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No Todos to Display</p>
      ) : (
        props.todos.map((todo) => (
          <React.Fragment key={todo.sno}>
          <Todoitems todo={todo}  onDelete={props.onDelete} /><hr/>
          </React.Fragment>
        ))
      )}
    </div>
  )
}

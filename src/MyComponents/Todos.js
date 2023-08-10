import React from 'react';
import Todoitem from "./Todoitem";

const Todos = (props) => {
  let Mystyle={
    minHight:"100vh",
    margin:"40px auto"
  }
  return (
    <div className="container " style={Mystyle}>
      <h3 className=" my-3">Todos List</h3>
      <hr></hr>
      {props.todos.length === 0? <h4 className="py-3">No todos to Display</h4>:
      props.todos.map((todo)=>{
       return <Todoitem todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
      })
      
    }
    
    </div>
  )
}

export default Todos;
//if we want to add multpal things for that we have to use <></>//
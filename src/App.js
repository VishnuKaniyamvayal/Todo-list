import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [ToDos,setToDos] = useState([]);
  const [ToDo,setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{return(setToDos([...ToDos,{id:Date.now() ,text: ToDo, status: false}]))}} className="fas fa-plus"></i>
      </div>
      { ToDos.map((obj)=>{
        
        return( <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(obj.status)
            setToDos(ToDos.filter((obj2)=>{
              if(obj2.id==obj.id)
              {
                obj2.status=e.target.checked
              }
              return obj2
            }))  
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>)})}
      {ToDos.map(obj=>{
        if(obj.status)
        {
          return(<h1>{obj.text}</h1>)
        }
      })

      }
    </div>)

  }


export default App;

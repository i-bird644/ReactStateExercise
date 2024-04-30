import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("")
  const [todoList, setTodoList] = useState(["Ready", "Set", "Go"]);

  function handleSubmit(event) {
    
    event.preventDefault();
    setTodoList([...todoList, inputText]);
    setInputText("");
  }

  return (
    <>
      
      <h1>ToDo List</h1>    
      <form onSubmit={handleSubmit}>
        <label htmlFor='todoInput'>Enter New Task</label>
        <input
          type='text'
          name='todoInput'
          id='todoInput'
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button> Add Task </button>
      </form>

      <ul>
        {
          todoList.map((ele, idx) => {
            return <li key={idx}>{ele}</li>
          })
        }
      </ul>
    </>
  )
}

export default App

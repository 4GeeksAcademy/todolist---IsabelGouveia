import React, { useState } from "react";

const Home = () => {
  // State variables for input text and todo list
  const [inputText, setInputText] = useState("");
  const [listTodo, setListTodo] = useState([]);

  const addTodo = () => {
    // Check if input text is not empty
    if (inputText.trim() !== "") {
      // Add input text to the todo list
      setListTodo([...listTodo, inputText]);
      // Clear the input text
      setInputText("");
    }
  };

  const deleteTodo = (index) => {
    // Create a copy of the todo list
    const updatedTodoList = [...listTodo];
    // Remove the todo item at the specified index using splice
    updatedTodoList.splice(index, 1);
    // Update the state with the modified todo list
    setListTodo(updatedTodoList);
  };

  return (
    <div className="container">
      {/* Heading */}
      <h1>Todo List</h1>
  
      {/* Todo list */}
      <div className="input-box-container">
        {/* Input field for adding new todos */}
        <input
          className="input-box"
          type="text"
          placeholder="Add item..."
          value={inputText}
          // Update the input text state when the value changes
          onChange={(e) => setInputText(e.target.value)}
        />
  
        {/* Button for adding a new todo */}
        <button onClick={addTodo}>Add</button>
      </div>
  
      <ul>
        {/* Map over the list of todos */}
        {listTodo.map((item, index) => (
          // Each todo item is rendered as an <li> element with a unique key
          <li key={index}>
            {item}
            <i className="fas fa-trash" onClick={() => deleteTodo(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


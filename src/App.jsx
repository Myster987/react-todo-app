import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
    const [currentInput, setCurrentInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleInput = (e) => {
        setCurrentInput(e.target.value);
    };

    const handleSubmit = () => {
        console.log(currentInput);
        setTodoList([...todoList, currentInput]);
    };

    const handleDelete = (toDelete) => {
        setTodoList(
            todoList.filter((value, index) => index != toDelete && value)
        );
    };

    return (
        <div className="wrapper">
            <TodoForm
                currentInput={currentInput}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />

            <TodoList todoList={todoList} handleDelete={handleDelete} />
        </div>
    );
};

export default App;

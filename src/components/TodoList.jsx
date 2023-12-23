/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, handleDelete }) => {
    return (
        <ul className="todo-ul">
            {todoList.map((value, index) => (
                <TodoListItem
                    key={index}
                    taskText={value}
                    handleDeleteClick={() => handleDelete(index)}
                />
            ))}
        </ul>
    );
};

export default TodoList;

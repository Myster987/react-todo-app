/* eslint-disable react/prop-types */
const TodoListItem = ({ taskText, handleDeleteClick }) => {
    return (
        <li className="todo-li">
            {taskText}
            <button className="todo-delete-btn" onClick={handleDeleteClick}>
                Delete
            </button>
        </li>
    );
};

export default TodoListItem;

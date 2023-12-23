/* eslint-disable react/prop-types */
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const TodoForm = ({ currentInput, handleInput, handleSubmit }) => {
    return (
        <form
            className="todo-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <FormInput currentInput={currentInput} onChange={handleInput} />
            <FormSubmitButton />
        </form>
    );
};

export default TodoForm;

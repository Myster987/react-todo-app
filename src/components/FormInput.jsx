/* eslint-disable react/prop-types */
const FormInput = ({ currentInput, onChange }) => {
    return (
        <input
            className="todo-form-input"
            type="text"
            placeholder="Type something..."
            required
            value={currentInput}
            onChange={onChange}
        />
    );
};

export default FormInput;

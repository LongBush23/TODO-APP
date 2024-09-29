import { useState } from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import { CATEGORY_ITEM } from "../constants";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportant] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [category, setCategory] = useState(data.category);

  const handleSave = () => {
    const newTodo = {
      ...data,
      name,
      isImportant,
      isCompleted,
      category,
    };
    props.handleTodoItemChange(newTodo);
    props.setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <form className="sb-form" action="">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            id="sb-name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              // props.handleTodoNameChange(data.id, e.target.value);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is important?</label>
          <input
            id="sb-important"
            type="checkbox"
            name="IsImportant"
            checked={isImportant}
            onChange={() => {
              setIsImportant(!isImportant);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is completed</label>
          <input
            id="sb-completed"
            type="checkbox"
            name="IsCompleted"
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select
            id="sb-category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {CATEGORY_ITEM.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => props.setShowSidebar(false)}>Cancel</button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setShowSidebar: PropTypes.func,
  todoItem: PropTypes.shape({
    name: PropTypes.string,
    isImportant: PropTypes.bool,
    isCompleted: PropTypes.bool,
    category: PropTypes.string,
  }),
  handleTodoItemChange: PropTypes.func,
};

export default Sidebar;

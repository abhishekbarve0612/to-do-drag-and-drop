import React from "react";
const NewTask = ({ addTask, onKeyDownAdd, status }) => {
  return (
    <div className="input-new-task">
      <input
        type="text"
        onKeyDown={(e) => {
          onKeyDownAdd(e);
        }}
        name="new-task"
        id="new-task"
      />
      <input
        id="add-new-task"
        type="submit"
        onClick={(e) => {
          addTask(e, status);
        }}
        value="Add Task"
      />
    </div>
  );
};

export default NewTask;

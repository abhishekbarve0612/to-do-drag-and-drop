const TaskItem = ({ editTask, value, onKeyDownEdit, deleteTask, tasks }) => {
  return (
    <div>
      {value["task"] && (
        <div className="task">
          <input
            val={value.id}
            onKeyDown={(e) => {
              onKeyDownEdit(e);
            }}
            defaultValue={value.task}
            type="text"
            disabled
          />
          <button
            val={value.id}
            onClick={(e) => editTask(e)}
            className="edit-task warning"
          >
            Edit
          </button>
          <button
            val={value.id}
            onClick={(e) => {
              deleteTask(e);
            }}
            className="delete-task danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;

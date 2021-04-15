import NewTask from "./NewTask";
import TaskItem from "./TaskItem";

const DoneSection = ({
  addTask,
  editTask,
  onKeyDownAdd,
  onKeyDownEdit,
  deleteTask,
  status,
  tasks,
  dropTask,
  dragTask,
  allowDrop,
}) => {
  return (
    <>
      <div className="head">
        <h3 className="to-do-title">DONE Tasks</h3>
        <NewTask
          addTask={addTask}
          onKeyDownAdd={onKeyDownAdd}
          status={status}
        />
      </div>
      <div className="tasks">
        <h4>Tasks List</h4>
        <ul
          id="done-tasks"
          onDrop={(e) => {
            dropTask(e, status);
          }}
          onDragOver={(e) => allowDrop(e)}
        >
          {tasks
            .filter((t) => t.status == "done")
            .map((task, index) => {
              return (
                <div
                  id={task.id}
                  draggable
                  onDragStart={(e) => dragTask(e)}
                  className="border-1 border-black"
                >
                  <TaskItem
                    value={task}
                    editTask={editTask}
                    onKeyDownEdit={onKeyDownEdit}
                    deleteTask={deleteTask}
                  />
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default DoneSection;

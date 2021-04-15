import { useState } from "react";
import uuid from "uuid/v1";
import DoneSection from "./DoneSection";
import InProgress from "./InProgress";
import ToDoSection from "./ToDoSection";
import "./style.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (e, status) => {
    console.log(tasks);
    const parent = e.target.parentElement;
    if (!/\S/.test(parent.children[0].value)) return;
    const temp = [...tasks];
    temp.push({
      id: uuid(),
      task: parent.children[0].value.trim(),
      status: status,
    });
    setTasks(temp);
    console.log(tasks);
    parent.children[0].value = "";
  };
  const editTask = (e) => {
    const editBtn = e.target;
    const val = editBtn.getAttribute("val");
    const inputEle = editBtn.parentElement.children[0];
    if (editBtn.innerText == "Edit") {
      inputEle.disabled = false;
      inputEle.focus();
      editBtn.innerText = "Save";
    } else {
      if (!/\S/.test(inputEle.value)) return;
      const temp = [...tasks];
      for (const t of temp) {
        if (t.id == val) {
          t.task = inputEle.value;
        }
      }
      setTasks(temp);
      inputEle.disabled = true;
      editBtn.innerText = "Edit";
    }
  };

  const deleteTask = (e) => {
    const deleteBtn = e.target;
    const val = deleteBtn.getAttribute("val");
    let temp = [...tasks];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == val) {
        temp[i].task = null;
        break;
      }
    }
    setTasks(temp);
  };
  const onKeyDownAdd = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      const addBtn = document.getElementById("add-new-task");
      addBtn.click();
    }
  };
  const onKeyDownEdit = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      const ele = e.target.parentElement;
      ele.children[1].click();
    }
  };
  const dropTask = (e, status) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("task-id");
    let requiredIndex = null;
    tasks.forEach((value, index) => {
      if (value.id == data) {
        requiredIndex = index;
      }
    });

    let tempTasks = [...tasks];
    tempTasks[requiredIndex] = {
      ...tasks[requiredIndex],
      status: status,
    };
    setTasks(tempTasks);
    e.target.appendChild(document.getElementById(data));
  };

  const dragTask = (e) => {
    e.dataTransfer.setData("task-id", e.target.id);
  };

  const allowDrop = (e) => e.preventDefault();
  return (
    <div className="row">
      <div className="col-4 border-end-0">
        <ToDoSection
          addTask={addTask}
          onKeyDownAdd={onKeyDownAdd}
          editTask={editTask}
          onKeyDownEdit={onKeyDownEdit}
          deleteTask={deleteTask}
          tasks={tasks}
          dropTask={dropTask}
          dragTask={dragTask}
          allowDrop={allowDrop}
          status="to_do"
        />
      </div>
      <div className="col-4 border-end-0">
        <InProgress
          addTask={addTask}
          onKeyDownAdd={onKeyDownAdd}
          editTask={editTask}
          onKeyDownEdit={onKeyDownEdit}
          deleteTask={deleteTask}
          tasks={tasks}
          dropTask={dropTask}
          dragTask={dragTask}
          allowDrop={allowDrop}
          status="in_progress"
        />
      </div>
      <div className="col-4 border-end-0">
        <DoneSection
          addTask={addTask}
          onKeyDownAdd={onKeyDownAdd}
          editTask={editTask}
          onKeyDownEdit={onKeyDownEdit}
          deleteTask={deleteTask}
          tasks={tasks}
          dropTask={dropTask}
          dragTask={dragTask}
          allowDrop={allowDrop}
          status="done"
        />
      </div>
    </div>
  );
};

export default Home;

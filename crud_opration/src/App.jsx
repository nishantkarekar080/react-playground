import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // add Task
  const handleAdd = () => {
    if (task !== "") {
      const udpatedList = [...taskList, task];
      setTaskList(udpatedList);
      localStorage.setItem("tasklist", JSON.stringify(udpatedList));
      setTask("");
    } else {
      alert("please entert task!");
    }
  };

  //delete task
  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((item, xid) => xid !== id && item);
    localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
  };

  //edit task
  const editTask = (task, index) => {
    setTask(task);
    setIsEdit(!isEdit);
    setEditTaskId(index);
  };

  //edit save
  const handleSave = () => {
    const updatedTaskList = taskList.map((item, index) =>
      index === editTaskId ? task : item
    );
    localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
    setTask("");
    setIsEdit(false);
  };

  useEffect(() => {
    const newtaskList = JSON.parse(localStorage.getItem("tasklist"));
    if (newtaskList && Array.isArray(newtaskList)) {
      setTaskList(newtaskList);
    }
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* {isEdit ? (
          <button onClick={hadleSave}>Save</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )} */}
        <button onClick={isEdit ? handleSave : handleAdd}>
          {isEdit ? "Save" : "Add"}
        </button>
      </div>

      <ul className="tasklist">
        {taskList.length ? (
          <>
            {taskList.map((item, index) => (
              <li key={index}>
                {item}{" "}
                <button onClick={() => editTask(item, index)}>Edit</button>{" "}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </>
        ) : (
          <p>List is empty</p>
        )}
      </ul>
    </div>
  );
}

export default App;

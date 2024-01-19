import React from "react";
import { useStore} from "../store";
import Swal from "sweetalert2";

function Todolist() {
  const { todlists, IsCompleted, remove, edit } = useStore();

  

  const sortedTodolists = [...todlists].sort((a, b) => a.isCompleted - b.isCompleted);

  const completedTasks = sortedTodolists.filter((todo) => todo.isCompleted);
  const incompleteTasks = sortedTodolists.filter((todo) => !todo.isCompleted);

  const isCompletedTask = (id: number) => {
    if (IsCompleted) {
      IsCompleted(id);
    }
  };

  const editTodo = (id: number) => {
    const updatedTitle = prompt("Enter updated title:");
    if (edit) {
      Swal.fire({
        title: "Do you want to save the changes?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save",
      }).then((result) => {
        if (result.isConfirmed) {
          if (updatedTitle !== null) {
            edit(id, updatedTitle);
            Swal.fire("Saved!", "", "success");
          }
        }
      });
    }
  };

  return (
    <div className="flex justify-center">
      <ul className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 flex flex-col gap-8">

        {/* start completedTasks */}

        <li>
          <h2 className=" text-green-500">Completed Tasks ({completedTasks.length})</h2>
          {completedTasks.map((todo, index) => (
            <div key={index}>
              <div
                onClick={() => isCompletedTask(index)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker ${todo.isCompleted ? 'line-through' : ''}`}
              >
                {todo.title}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => editTodo(index)}
                  className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2"
                >
                  <span className="material-symbols-outlined">edit</span>Edit
                </button>
                <button
                  onClick={() => remove(index)}
                  className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded hover:bg-red-500 flex gap-2"
                >
                  <span className="material-symbols-outlined">delete</span>Delete
                </button>
              </div>
            </div>
          ))}
        </li>

        {/* start incompleteTasks */}

        <li>
          <h2 className=" text-red-600">Incomplete Tasks ({incompleteTasks.length})</h2>
          {incompleteTasks.map((todo, index) => (
            <div key={index}>
              <div
                onClick={() => isCompletedTask(index)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker ${todo.isCompleted ? 'line-through' : ''}`}
              >
                {todo.title}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => editTodo(index)}
                  className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2"
                >
                  <span className="material-symbols-outlined">edit</span>Edit
                </button>
                <button
                  onClick={() => remove(index)}
                  className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded hover:bg-red-500 flex gap-2"
                >
                  <span className="material-symbols-outlined">delete</span>Delete
                </button>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Todolist;

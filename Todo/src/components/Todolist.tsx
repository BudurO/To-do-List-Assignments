import React from "react";
import { useStore } from "../store";

function Todolist() {
  const { todlists } = useStore();
  console.log('todlists', todlists); // Log to check if todlists is populated

  return (
    <>
    <div className=" flex justify-center">
    <ul className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        {todlists.map((todo) => (
          <li key={todo.id} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker">
            {todo.data.title}
            </li>
        ))}
        {/* <button className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2">
                  <span className="material-symbols-outlined">edit</span>Edit
                </button>
                <button className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded   hover:bg-red-500  flex gap-2">
                  <span className="material-symbols-outlined">delete</span>
                  Delete
                </button>  */}
      </ul>
    </div>
    </>
  );
}

export default Todolist;

import React from "react";
import { useStore } from "../store";

function Todolist() {
  const { todlists , IsCompleted} = useStore();
  console.log("todlists", todlists); // Log to check if todlists is populated

  const isCompletedTask = (id: number) =>{
    if(IsCompleted){
      IsCompleted(id)
      // IsCompleted(id.id);
      console.log("id todo",id);  
    }
   
  };
  return (
    
      <div className=" flex justify-center">
        <ul className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 flex flex-col gap-8">
          {todlists.map((todo,index) => (
            <>
              <li
                key={index}
                onClick={() => {isCompletedTask(index)}}
                className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker ${todo.isCompleted ? 'line-through' : ''}`}
              >
                {todo.title}
              </li>
              <div className="flex justify-end">
                  <button className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2">
                    <span className="material-symbols-outlined">edit</span>Edit
                  </button>
                  <button className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded   hover:bg-red-500  flex gap-2">
                    <span className="material-symbols-outlined">delete</span>
                    Delete
                  </button>
                </div>
            </>
          ))}
        </ul>
      </div>
  );
}

export default Todolist;

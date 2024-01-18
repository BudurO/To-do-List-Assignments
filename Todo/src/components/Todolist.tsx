import React from "react";
import { useStore } from "../store";
import Swal from "sweetalert2";

function Todolist() {
  const { todlists , IsCompleted,remove,edit} = useStore();
  console.log("todlists", todlists); // Log to check if todlists is populated

  const isCompletedTask = (id: number) =>{
    if(IsCompleted){
      IsCompleted(id)
      console.log("id todo",id);  
    }
   
  };

  const editTodo = (id: number) => {
    const updataTitle = prompt("Enter updated title:")
    if(edit){
      Swal.fire({
        title: "Do you want to save the changes?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save"
      }).then((result) => {
          if (result.isConfirmed){
          if (updataTitle !== null) {
          edit(id,updataTitle);
          Swal.fire("Saved!", "", "success");
        } 
      }
      });
      
    }
  }  
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
                  <button onClick={() => {editTodo(index)}} className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2">
                    <span className="material-symbols-outlined">edit</span>Edit
                  </button>
                  <button onClick={() => {remove(index)}} className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded   hover:bg-red-500  flex gap-2">
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

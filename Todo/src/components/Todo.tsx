import React from "react";
import Swal from 'sweetalert2'

function Todo() {
  return (
    <>
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <div className="flex mt-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-slate-50">
                  Add
                </button>
              </div>
            </div>
            <div>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">
                  Add another component to Tailwind Components
                </p>
                <button className="flex-no-shrink pl-4 pr-4 ml-4 mr-2 border-2 rounded hover:bg-slate-100 flex gap-2">
                  <span className="material-symbols-outlined">edit</span>Edit
                </button>
                <button className="flex-no-shrink pl-4 pr-4 ml-2 border-2 rounded   hover:bg-red-500  flex gap-2">
                  <span className="material-symbols-outlined">delete</span>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;

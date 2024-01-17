import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useStore } from "../store";

function Todo() {
  const { add} = useStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: ""
    }
  });
  // console.log(watch("todolist"));
  //  console.log(errors);

  const onSubmit = (data) => {
    add({ data, isCompleted: false }); //{title:"DDD", isCompleted: false }
  };

  return (
    <>
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <form className="flex mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo..."
                  {...register("title", { required: "Please add To Do something", minLength:{
                    value:3,
                    message:"minLength is 3"
                  } })}
                />
                <button
                  type="submit"
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-slate-50"
                >
                  Add
                </button>
              </form>
              <p className="text-red-600">{errors.title?.message}</p>

            </div>
            <div className=" flex justify-between">
              <div className="flex mb-4 items-center flex-col"></div>

              <div className="flex  items-center">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;

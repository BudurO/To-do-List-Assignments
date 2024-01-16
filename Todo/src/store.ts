import { create } from "zustand";

export const useStore = create((set) => ({
  todlists: [],

  add: (item) =>
    set((state) => {
      state.todlists.push(item);
      return { ...state };
    }),
    // remove: (item,id) =>
    // set((state) =>{
    //     state.todlists.splice(item)
    //     return {...state}
    // }),
    // edit:(item,id)=>
    // set((state) => {
    //     state.todlists.
    // })
}));

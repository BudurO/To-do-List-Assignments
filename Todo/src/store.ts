import { create } from "zustand";

export interface ITodo {
  title: string;
  isCompleted: boolean;
}

export interface StoreState {
  todlists: ITodo[];
}

export interface StoreActions extends StoreState {
  add: (item: ITodo) => void;
  IsCompleted?: (id: number) => void;
  remove?: (id: number) => void;
}

export const useStore = create<StoreActions>((set) => ({
  todlists: [],

  add: (item: ITodo) =>
    set((state) => {
      state.todlists.push(item);
      return { ...state };
    }),
  IsCompleted: (id: number) =>
    set((state) => ({
      todlists: state.todlists.map((todo,index) =>
        index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }
    )),

  // remove: (id: number) =>
  // set((state) =>{
  //     state.todlists.splice(item)
  //     return {...state}
  // }),
  // edit:(item,id)=>
  // set((state) => {
  //     state.todlists.
  // })
}));

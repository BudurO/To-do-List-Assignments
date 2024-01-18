import { create } from "zustand";

export interface ITodo {
  title: string;
  isCompleted: boolean;
  updatedTitle: string
}


export interface StoreState {
  todlists: ITodo[];
}

export interface StoreActions extends StoreState {
  add: (item: ITodo) => void;
  IsCompleted?: (id: number) => void;
  remove: (id: number) => void;
  edit?: (id: number, updatedTitle: string) => void;
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
      todlists: state.todlists.map((todo, index) =>
        index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    })),

  remove: (id: number) =>
    set((state) => ({
      todlists: state.todlists.filter(
        (todo, index) => index !== id && todo.title
      ),
    })),

    edit: (id: number, updatedTitle: string) =>
    set((state) => {
      const updatedTodolists = state.todlists.map((todo, index) =>
        index === id ? { ...todo, title: updatedTitle } : todo
      );
      return { todlists: updatedTodolists };
    }),

}));




// ذحين عندي لما يضغط على edit يطلع box بعد ما يحط ال title الجديد يتغير الى الجديد
// edit:(id: number)=>
//   set((state) => ({
//     todlists: state.todlists.map((todo,index) =>
//     index === id && todo.title
//     ),
//   })
//       // state.todlists.
//   })

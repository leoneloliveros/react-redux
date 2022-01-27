import {
  ADD_TODO,
  TOGGLE_LOADER,
  UPDATE_CURRENT,
  LOAD_TODOS,
  REMOVE_TODO,
} from "./types";

const List = [
  { id: 1, isCompleted: false, name: "Levantarse" },
  { id: 2, isCompleted: false, name: "Comer" },
  { id: 3, isCompleted: false, name: "Metoria" },
  { id: 4, isCompleted: false, name: "Dormir" },
];

const initialState = {
  todos: [],
  isLoading: false,
  message: "",
  currentTodo: "",
  category: "todos",
  filter: 'asc',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      //state.todos.push(1) // x
      // const newArray = [ ...state.todos ]
      // newArray.push(1)
      return {
        ...state,
        todos: action.payload,
      };
    // case SAVE_FILTER:
    //   return {
    //     ...state,
    //     filter: action.payload
    //   };
    case ADD_TODO:
      const todos = [...state.todos, action.payload];
      return {
        ...state,
        todos,
        currentTodo: "",
      };
    case UPDATE_CURRENT:
      return {
        ...state,
        currentTodo: action.payload,
      };

    case REMOVE_TODO:
      const newList = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newList,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;

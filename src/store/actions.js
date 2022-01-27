import { ADD_TODO, TOGGLE_LOADER, UPDATE_CURRENT, LOAD_TODOS, REMOVE_TODO } from "./types"

import { getTodos, createTodo, destroyTodo } from '../lib/todoService'

//action creator
export const loadTodos = (todo) => ({
  type: LOAD_TODOS,
  payload: todo
})


export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const toggleLoader = (status) => ({
  type: TOGGLE_LOADER,
  payload: status
})

export const updateCurrent = (value) => ({
  type: UPDATE_CURRENT,
  payload: value
})

// export const saveFilter = (value) => ({
//   type: UPDATE_CURRENT,
//   payload: value
// })

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
})


export const fetchTodos = () => async (dispatch) => {
  //dispatch(addTodo(List)) peticion a nuestro backend

  // const todos = await getTodos().then(()=> {
  //   dispatch(toggleLoader(false))
  //   //
  // }).then(()=>{}).then(()=> ).catch((err) => {

  // })  
  dispatch(toggleLoader(true))
  try {
    const todos = await getTodos() // [{}, {}] { type: , payload: }
    dispatch(loadTodos(todos)) // { type: ADD_TODO , payload: [{}, {}] }
  } catch(err) {
    // error
    //dispatch(messageView(todos))
  } finally {
    dispatch(toggleLoader(false))
  }
  
}

export const saveTodo = (todo) => async (dispatch) => {
  dispatch(toggleLoader(true))
  try {
    const todoCreated = await createTodo(todo)
    dispatch(addTodo(todoCreated))
  } catch(err) {
    // error
    //dispatch(messageView(todos))
  } finally {
    dispatch(toggleLoader(false))
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(toggleLoader(true))
  try {
    await destroyTodo(id)
    dispatch(removeTodo(id))
  } catch(err) {
    // error
    //dispatch(messageView(todos))
  } finally {
    dispatch(toggleLoader(false))
  }
}


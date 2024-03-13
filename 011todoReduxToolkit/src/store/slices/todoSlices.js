import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
    },
    todoCompleted: (state, action) => {
      state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo)
    }
  }

})

export const { addTodo, removeTodo, updateTodo, todoCompleted } = todoSlice.actions

export default todoSlice.reducer
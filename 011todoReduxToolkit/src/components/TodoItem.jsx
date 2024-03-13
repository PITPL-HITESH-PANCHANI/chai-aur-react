import React from "react";
import { useState } from "react";
import {
  removeTodo,
  todoCompleted,
  updateTodo,
} from "../store/slices/todoSlices";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.text);
  const dispatch = useDispatch();

  const toggleCompleted = () => {
    dispatch(todoCompleted(todo.id));
  };
  const edit = () => {
    dispatch(updateTodo({ id: todo.id, text: editTodo }));
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }
    }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
        ${todo.isCompleted ? "line-through" : ""}
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={editTodo}
        readOnly={!isTodoEditable}
        onChange={(e) => setEditTodo(e.target.value)}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;
          if (isTodoEditable) {
            edit();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;

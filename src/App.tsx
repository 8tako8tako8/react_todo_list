import React, { useState } from 'react'

import { DeleteConfirmation } from './components/DeleteConfirmation'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { TodoStatusCount } from './components/TodoStatusCount'
import { TodoList } from './components/TodoList'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

export default function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [showModal, setShowModal] = useState(false)
  const [deleteTodoId, setDeleteTodoId] = useState<string>('')

  return (
    <>
      <InputTodo
        todos={todos}
        todoText={todoText}
        setTodoText={setTodoText}
        setTodos={setTodos}
      />
      <div className="todo-area">
        <p className="title">TODO</p>
        <TodoStatusCount todos={todos} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setShowModal={setShowModal}
          setDeleteTodoId={setDeleteTodoId}
        />
        <DeleteConfirmation
          todos={todos}
          showModal={showModal}
          deleteTodoId={deleteTodoId}
          setTodos={setTodos}
          setShowModal={setShowModal}
          setDeleteTodoId={setDeleteTodoId}
        />
      </div>
    </>
  )
}

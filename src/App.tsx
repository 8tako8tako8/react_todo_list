import React, { useState } from 'react'

import { DeleteConfirmation } from './components/DeleteConfirmation'
import { InputTodo } from './components/InputTodo'
import { TodoArea } from './components/TodoArea'

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
      <TodoArea
        todos={todos}
        showModal={showModal}
        deleteTodoId={deleteTodoId}
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
    </>
  )
}

import React, { useState } from 'react'

import { DeleteConfirmation } from './DeleteConfirmation'
import './App.css'

type Todo = {
  id: number
  title: string
  completed: boolean
  editing: boolean
}

export default function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [showModal, setShowModal] = useState(false)
  const [deleteTodoId, setDeleteTodoId] = useState<number | null>(null)

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value)
  const onClickAddTodo = () => {
    if (todoText === '') return
    const newTodo: Todo = {
      id: todos.length + 1,
      title: todoText,
      completed: false,
      editing: false,
    }
    setTodos([...todos, newTodo])
    setTodoText('')
  }
  const onChangeTodoCompleted = (todo: Todo) => {
    const newTodos: Todo[] = todos.slice().map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed
      }
      return t
    })
    setTodos(newTodos)
  }
  const onClickEditTodo = (todo: Todo) => {
    const newTodos: Todo[] = todos.slice().map((t) => {
      if (t.id === todo.id && t.title !== '') {
        t.editing = !t.editing
      }
      return t
    })
    setTodos(newTodos)
  }
  const onChangeEditTodo = (
    e: React.ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    const newTodos: Todo[] = todos.slice().map((t) => {
      if (t.id === todo.id) {
        t.title = e.target.value
      }
      return t
    })
    setTodos(newTodos)
  }
  const onClickDeleteConfirm = (todo: Todo) => {
    setDeleteTodoId(todo.id)
    setShowModal(true)
  }
  const onClickDeleteCancel = () => {
    setShowModal(false)
    setDeleteTodoId(null)
  }
  const onClickDelete = (deleteTodoId: number) => {
    const newTodos: Todo[] = todos.filter((t) => t.id !== deleteTodoId).slice()
    setTodos(newTodos)
    setShowModal(false)
    setDeleteTodoId(null)
  }

  return (
    <>
      <div className="input-area">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAddTodo}>保存</button>
      </div>
      <div className="todo-area">
        <p className="title">TODO</p>
        <div>
          <p>全てのタスク：{todos.length}</p>
          <p>完了済み：{todos.filter((todo) => todo.completed).length}</p>
          <p>全てのタスク：{todos.length}</p>
        </div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="list-row">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onChangeTodoCompleted(todo)}
                />
                {todo.editing ? (
                  <>
                    <input
                      value={todo.title}
                      onChange={(e) => onChangeEditTodo(e, todo)}
                    />
                    <button onClick={() => onClickEditTodo(todo)}>保存</button>
                  </>
                ) : (
                  <>
                    <p>{todo.title}</p>
                    {todos.filter((t) => t.editing).length === 0 && (
                      <>
                        <button onClick={() => onClickEditTodo(todo)}>
                          編集
                        </button>
                        <button onClick={() => onClickDeleteConfirm(todo)}>
                          削除
                        </button>
                      </>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ul>
        <DeleteConfirmation
          showModal={showModal}
          deleteTodoId={deleteTodoId}
          onClickDeleteCancel={onClickDeleteCancel}
          onClickDelete={onClickDelete}
        />
      </div>
    </>
  )
}

import React, { FC } from 'react'

import { DeleteConfirmation } from './DeleteConfirmation'
import { TodoStatusCount } from './TodoStatusCount'
import { TodoList } from './TodoList'
import classes from './TodoArea.module.scss'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

type Props = {
  todos: Todo[]
  showModal: boolean
  deleteTodoId: string
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setDeleteTodoId: React.Dispatch<React.SetStateAction<string>>
}

export const TodoArea: FC<Props> = (props) => {
  const {
    todos,
    showModal,
    deleteTodoId,
    setTodos,
    setShowModal,
    setDeleteTodoId,
  } = props

  return (
    <div className={classes.todoArea}>
      <p className={classes.title}>TODO</p>
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
  )
}

import { FC } from 'react'

import classes from './Todo.module.scss'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setDeleteTodoId: React.Dispatch<React.SetStateAction<string>>
}

export const Todo: FC<Props> = (props) => {
  const { todo, todos, setTodos, setShowModal, setDeleteTodoId } = props

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

  return (
    <li className={classes.listRow}>
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
              <button onClick={() => onClickEditTodo(todo)}>編集</button>
              <button onClick={() => onClickDeleteConfirm(todo)}>削除</button>
            </>
          )}
        </>
      )}
    </li>
  )
}

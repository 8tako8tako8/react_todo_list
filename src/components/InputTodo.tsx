import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import classes from './InputTodo.module.scss'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

type Props = {
  todos: Todo[]
  todoText: string
  setTodoText: React.Dispatch<React.SetStateAction<string>>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const InputTodo: FC<Props> = (props) => {
  const { todos, todoText, setTodoText, setTodos } = props

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value)
  const onClickAddTodo = () => {
    if (todoText === '') return
    const newTodo: Todo = {
      id: uuidv4(),
      title: todoText,
      completed: false,
      editing: false,
    }
    setTodos([...todos, newTodo])
    setTodoText('')
  }

  return (
    <div className={classes.inputArea}>
      <input value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAddTodo}>保存</button>
    </div>
  )
}

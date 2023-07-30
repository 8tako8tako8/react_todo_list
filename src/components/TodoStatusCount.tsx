import { FC } from 'react'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

type Props = {
  todos: Todo[]
}

export const TodoStatusCount: FC<Props> = (props) => {
  const { todos } = props

  return (
    <div>
      <p>全てのタスク：{todos.length}</p>
      <p>完了済み：{todos.filter((todo) => todo.completed).length}</p>
      <p>未完了：{todos.filter((todo) => !todo.completed).length}</p>
    </div>
  )
}

import { FC } from 'react'
import { Todo } from './Todo'

type Todo = {
  id: string
  title: string
  completed: boolean
  editing: boolean
}

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setDeleteTodoId: React.Dispatch<React.SetStateAction<string>>
}

export const TodoList: FC<Props> = (props) => {
  const { todos, setTodos, setShowModal, setDeleteTodoId } = props

  return (
    <ul>
      {todos.map((todo: Todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setShowModal={setShowModal}
            setDeleteTodoId={setDeleteTodoId}
          />
        )
      })}
    </ul>
  )
}

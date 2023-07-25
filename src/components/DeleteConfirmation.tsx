import { FC } from 'react'

import classes from './DeleteConfirmation.module.scss'

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

export const DeleteConfirmation: FC<Props> = (props) => {
  const {
    todos,
    showModal,
    deleteTodoId,
    setTodos,
    setShowModal,
    setDeleteTodoId,
  } = props

  const onClickDeleteCancel = () => {
    setShowModal(false)
    setDeleteTodoId('')
  }
  const onClickDelete = (deleteTodoId: string) => {
    const newTodos: Todo[] = todos.filter((t) => t.id !== deleteTodoId).slice()
    setTodos(newTodos)
    setShowModal(false)
    setDeleteTodoId('')
  }

  return showModal ? (
    <div className={classes.modal}>
      <div className={classes.modalInner}>
        <p>本当に削除しますか？</p>
        <button onClick={onClickDeleteCancel}>キャンセル</button>
        {deleteTodoId !== null && (
          <button onClick={() => onClickDelete(deleteTodoId)}>削除</button>
        )}
      </div>
    </div>
  ) : null
}

import { FC } from 'react'

type Props = {
  showModal: boolean
  deleteTodoId: number | null
  onClickDeleteCancel: () => void
  onClickDelete: (id: number) => void
}

export const DeleteConfirmation: FC<Props> = (props) => {
  const { showModal, deleteTodoId, onClickDeleteCancel, onClickDelete } = props
  return showModal ? (
    <div className="modal">
      <div className="modal-inner">
        <p>本当に削除しますか？</p>
        <button onClick={onClickDeleteCancel}>キャンセル</button>
        {deleteTodoId !== null && (
          <button onClick={() => onClickDelete(deleteTodoId)}>削除</button>
        )}
      </div>
    </div>
  ) : null
}

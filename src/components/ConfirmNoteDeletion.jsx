import React from 'react'

const ConfirmNoteDeletion = ({onCloseModal, onConfirmDelete, deletedNote}) => {

  const handleConfirm = (deletedNote) => {
    onConfirmDelete(deletedNote)
    onCloseModal()
  }

  const handleCancel = () => {
    onCloseModal()
  }

  const message = deletedNote.length > 1 ? 'Are you sur to delete this memo ?' : 'Are you sure to delete these memos ?'

  return (
    <div className='bg-gray-100 px-2 py-1 md:px-4 md:py-3 dark:border-none dark:bg-header-card-dark'>
      <header className='px-3 py-2 border-b dark:border-main-card-dark text-slate-600 dark:text-slate-200 font-medium'>
        <p>Confirmation</p>
      </header>
      <main className='py-2 px-2 md:px-5 text-gray-600 dark:text-slate-300'>
        <p className='text-sm'>{message}</p>
      </main>
      <footer className='px-2 mt-2 flex gap-4 justify-end'>
        <button onClick={handleCancel} className='button-base bg-gray-600/70 hover:bg-gray-700/70 text-gray-100 dark:text-gray-300'>Cancel</button>
        <button onClick={() => handleConfirm(deletedNote)} className='button-base bg-red-500 hover:bg-red-600 text-gray-100 dark:text-gray-200'>Delete</button>  
      </footer>
    </div>
  )
}

export default ConfirmNoteDeletion
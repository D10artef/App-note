import React from 'react'

const ConfirmNoteDeletion = ({onCloseModal, onConfirmDelete, id}) => {

  const handleConfirm = (id) => {
    onConfirmDelete(id)
    onCloseModal()
  }
  const handleCancel = () => {
    onCloseModal()
  }

  return (
    <div className='bg-gray-100 rounded px-2 py-1 md:px-4 md:py-3 dark:border-none dark:bg-header-card-dark'>
      <header className='px-3 py-2 border-b dark:border-main-card-dark text-slate-600 dark:text-slate-300 font-medium'>
        <p>Confirmation</p>
      </header>
      <main className='py-2 px-2 text-gray-600 dark:text-slate-400'>
        <p className='text-sm'>Vous etês certain de supprimer cette note?</p>
      </main>
      <footer className='px-2 mt-2 flex gap-4 justify-end'>
        <button onClick={handleCancel} className='button-base bg-gray-600/70 hover:bg-gray-700/70 text-gray-100 dark:text-gray-300'>Annuler</button>
        <button onClick={() => handleConfirm(id)} className='button-base bg-red-600 hover:bg-red-700 text-gray-100 dark:text-gray-200'>Supprimer</button>  
      </footer>
    </div>
  )
}

export default ConfirmNoteDeletion
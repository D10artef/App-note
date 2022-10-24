import React from 'react'
import Notes from './Notes'

const FieldNotes = ({title, filtredNotes, handleToggleNote, openConfirmModal, children}) => {
  const handleClick = () => {
    openConfirmModal(filtredNotes)
  }

  return (
    <div>
      <header className='mx-2 text-sm  border-b-2 py-1 mb-1 border-gray-200 dark:border-gray-700 flex justify-between'>
        { children ? <div className='font-semibold text-slate-600 dark:text-slate-300'>{children}</div> : <h1 className="font-semibold text-slate-600 dark:text-slate-300">{title}</h1>}
        
        { 
          filtredNotes && filtredNotes.length > 0 ? 
          <button className="text-red-500 px-2 dark:text-rose-500/80 focus:outline-none focus:text-red-500/80 hover:text-red-500/80 dark:hover:text-rose-600 dark:focus:text-rose-600 text-sm font-medium underline cursor-pointer" onClick={handleClick}>Delete</button> : ''
        }
      </header>
      <main>
        {
          filtredNotes && filtredNotes.length > 0 ?
          <Notes onToggleNote={handleToggleNote} onConfirmDeletion={openConfirmModal} notes={filtredNotes}></Notes>
          : <div className='font-light text-slate-400/50 text text-center p-10'><span >No memos | tasks</span></div>
        }
      </main>
    </div>
  )
}

export default FieldNotes
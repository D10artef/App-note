import React from 'react'
import Notes from './Notes'

const FieldNotes = ({title, filtredNotes, handleToggleNote, openConfirmModal, fieldKey}) => {
  const handleClick = () => {
    console.log(fieldKey);
    openConfirmModal(filtredNotes)
  }

  return (
    <div>
      <div className='mx-2 text-sm  border-b-2 py-1 mb-1 border-gray-200 dark:border-gray-700 flex justify-between'>
        <h1 className="font-semibold text-slate-600 dark:text-slate-300">{title}</h1>
        { 
          filtredNotes && filtredNotes.length > 0 ? 
          <button className="text-red-500 px-2 dark:text-rose-500/80 focus:outline-none focus:text-red-500/80 hover:text-red-500/80 dark:hover:text-rose-600 dark:focus:text-rose-600 text-xs underline cursor-pointer" onClick={handleClick}>Effacer</button> : ''
        }
      </div>
      {
        filtredNotes && filtredNotes.length > 0 ?
        <Notes onToggleNote={handleToggleNote} onConfirmDeletion={openConfirmModal} notes={filtredNotes}></Notes>
        : <div className='font-light text-slate-400/50 text text-center p-6'><span >Aucune  note</span></div>
      }
    </div>
  )
}

export default FieldNotes
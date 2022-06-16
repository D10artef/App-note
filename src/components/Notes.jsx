import React from 'react'
import Note from './Note'

const Notes = ({notes, onToggleNote, onConfirmDeletion}) => {
  const noteList = notes.map(note => 
    <Note note={note} key={note.id} onToggle={onToggleNote} onDelete={onConfirmDeletion}></Note>
  )
  return (
    <div className='gap-2 grid py-3 items-start grid-cols-1 xs:grid-cols-2 auto-cols-max sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 px-1'>{noteList}</div>

  )
}

export default Notes
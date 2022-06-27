import React from 'react'
import {MdOutlineDelete, MdDone} from 'react-icons/md'
import {dateToString, getDateNow} from '../utilities/UtilitiesFunction'

const Note = ({note, onToggle, onDelete}) => {

  let doneClassName = 'duration-500 cursor-pointer '
  doneClassName += note.done ? ' text-emerald-600 dark:text-teal-600' : ' text-slate-300 hover:text-slate-400 dark:text-gray-700 dark:hover:text-gray-600'

  //Delete array to the list, in this case, the single note
  const handleDelete = (array) => {
    onDelete(array)
  }

  const handleDone = (id) => {
    onToggle(id)
  }

  

  return (
    <div className='rounded overflow-hidden shadow-sm border border-neutral-200 dark:border-none'>
      <header className='px-3 pt-2 pb-1 bg-neutral-200/75  dark:bg-header-card-dark'>
        <p className='text-xtiny md:text-sm font-medium text-slate-700 text-justify first-letter:capitalize dark:text-gray-200'>{note.title}</p>
        { note.date === getDateNow() ? 
          <p className='text-[.7rem] font-semibold md:text-xs text-indigo-800 dark:text-indigo-400 text-right -tracking-wider pt-1'> {note.time} </p> : 
          <p className='text-[.7rem] font-semibold md:text-xs text-indigo-800 dark:text-indigo-400 text-right -tracking-wider pt-1'>{dateToString(note.date)}</p>
        }
        </header>
      { note.content ? 
        <main className='px-3 py-1 bg-zinc-100 dark:bg-main-card-dark'>
          <p className='text-xxtiny md:text-xtiny text-gray-600 dark:text-neutral-300 font-light text-justify first-letter:capitalize'>{note.content}</p>
        </main> : ''
      }
      <footer className='px-3 pb-2 pt-1 flex justify-between dark:bg-main-card-dark'>
        <span className='text-xs text-sky-800 dark:text-sky-600 capitalize'>{note.location}</span>
        <div className='flex justify-end items-center gap-2'>
          <span className='text-red-400 dark:text-rose-600 hover:text-red-500 dark:hover:text-rose-700 duration-600 cursor-pointer' onClick={()=>handleDelete([note])}><MdOutlineDelete/></span>
          <span className={doneClassName} onClick={()=>handleDone(note.id)}><MdDone/></span>
        </div>
      </footer>
    </div>
  )
}

export default Note
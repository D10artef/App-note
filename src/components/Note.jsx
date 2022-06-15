import React from 'react'
import {MdOutlineDelete, MdDone} from 'react-icons/md'

const Note = ({note}) => {

  let doneClassName = 'duration-500 cursor-pointer '
  doneClassName += note.done ? ' text-emerald-600 dark:text-teal-600' : ' text-slate-300 hover:text-slate-400 dark:text-gray-700 dark:hover:text-gray-600'

  const handleDelete = (id) => {
    console.log(id)
  }

  const handleDone = (id) => {
    console.log(id)
  }

  return (
    <div className='rounded overflow-hidden shadow-sm border border-neutral-200 dark:border-none'>
      <header className='px-3 py-2 bg-neutral-200  dark:bg-header-card-dark'>
        <p className='text-tiny  font-medium text-slate-700 text-justify  dark:text-gray-200 capitalize'>{note.title}</p></header>
      <main className='px-3 py-2 bg-zinc-100 dark:bg-main-card-dark'>
        <p className='text-xtiny text-gray-600 dark:text-neutral-300 font-light'>{note.content}</p>
      </main>
      <footer className='px-3 py-2 flex justify-between dark:bg-main-card-dark'>
        <span className='text-xs text-sky-800'>{note.location}</span>
        <div className='flex justify-end items-center gap-3'>
          <span className='text-red-400 dark:text-rose-600 hover:text-red-500 duration-600 cursor-pointer' onClick={()=>handleDelete(note.id)}><MdOutlineDelete/></span>
          <span className={doneClassName} onClick={()=>handleDone(note.id)}><MdDone/></span>
        </div>
      </footer>
    </div>
  )
}

export default Note
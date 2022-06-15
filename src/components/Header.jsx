import React from 'react'
import AddNote from './AddNote'

const Header = () => {
  return (
    <div>
      <h1 className='text-3xl text-center pb-4 pt-8 md:pt-12 font-medium text-slate-400/70 tracking-widest dark:text-gray-500'>MemoS</h1>
      <p className='text-center text-sm pb-4 md:pb-8 text-slate-400 dark:text-gray-400'>Gardez vos notes quotidiennes</p>
      <AddNote></AddNote>
    </div>
  )
}

export default Header
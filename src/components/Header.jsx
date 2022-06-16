import React from 'react'
import {MdPostAdd} from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

const Header = ({onOpenAddModal, onSearchTextChange}) => {
  const handleChange = (event) => {
    onSearchTextChange(event.target.value)
  }
  return (
    <div className='pb-2 mb-6'>
      <h1 className='text-3xl text-center pb-4 pt-8 md:pt-12 font-medium text-slate-400/70 tracking-widest dark:text-gray-500'>MemoS</h1>
      <p className='text-center text-sm pb-4 md:pb-8 text-slate-400 dark:text-gray-400'>Gardez vos notes quotidiennes</p>
      <div className='flex justify-between gap-x-3 px-2'>
        <button className='button-base bg-neutral-200/80 text-gray-600 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/90 flex gap-x-1 items-center' onClick={()=>onOpenAddModal()}>Ajouter<span className='text-lg py-0.5'><MdPostAdd/></span></button>
        <div className='relative'>
          <input className='input-base pl-6' placeholder='Recherche' maxLength={50} onChange={handleChange}></input>
          <span className='text-slate-400 dark:text-gray-400 absolute top-0 left-0 translate-y-1/2'>
            <GoSearch></GoSearch>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
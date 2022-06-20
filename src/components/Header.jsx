import React from 'react'
import {MdPostAdd} from 'react-icons/md'
import { GoSearch } from 'react-icons/go'

const Header = ({onOpenAddModal, onSearchFilterChange}) => {

  const handleChange = (event) => {
    if(event.target.type === 'checkbox'){
      let {name, checked} = event.target
      onSearchFilterChange(name, checked)
    }else{
      let {name, value} = event.target
      onSearchFilterChange(name, value)
    }
  }
  return (
    <div className='pb-2 mb-6'>
      <h1 className='text-3xl text-center pb-4 pt-8 md:pt-12 font-medium text-slate-400/70 tracking-widest dark:text-gray-500'>MemoS</h1>
      <p className='text-center text-sm pb-4 md:pb-8 text-slate-400 dark:text-gray-400'>Gardez vos notes quotidiennes</p>
      <div className='flex items-end justify-between gap-x-3 px-2'>
        <div className="flex gap-x-2">
          <button className='button-base bg-neutral-200/80 text-gray-600 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/90 flex gap-x-1 items-center' onClick={()=>onOpenAddModal()}>Ajouter<span className='text-lg py-0.5'><MdPostAdd/></span></button>
          <button className='button-base bg-neutral-200/80 text-gray-600 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/90 flex gap-x-1 items-center'>Achevées<span className='text-lg py-0.5'><MdPostAdd/></span></button>
        </div>
        <div className='flex gap-x-3 md:gap-x-4 items-end'>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="done" id="done" className='border-none' onChange={handleChange}/>
            <label className='text-sm text-gray-400' htmlFor="done">Achevé</label>
          </div>
          <div className='relative'>
            <input type='text' name='text' className='input-base pl-6 sm:w-64' placeholder='Recherche' maxLength={50} onChange={handleChange}></input>
            <span className='text-slate-400 dark:text-gray-400 absolute top-0 left-0 translate-y-1/2'>
              <GoSearch></GoSearch>
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header
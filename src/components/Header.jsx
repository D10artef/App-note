import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import { BiGridAlt } from 'react-icons/bi'
import { MdDoneAll, MdRemoveDone } from 'react-icons/md' 

const Header = ({onOpenAddModal, onSearchFilterChange, state}) => {
  function handleClick(value){
    onSearchFilterChange('state', value)
  }
  const handleChange = (event) => {
    let {name, value} = event.target
    onSearchFilterChange(name, value)
  }

  let stateNoteButton
  if(state === 'done') {
    stateNoteButton = 
    <button className='button-base bg-emerald-200/80 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-200 border-emerald-300 dark:bg-emerald-700/70 dark:hover:bg-emerald-700/60 flex gap-x-1 items-center' onClick={()=>handleClick('not_done')}>
      <span className='hidden xs:inline'>Note achevées</span>
      <span className='text-lg py-0.5'><MdDoneAll/></span>
    </button>
  }else if(state === 'not_done'){
    stateNoteButton = 
    <button className='button-base bg-rose-100/80 text-rose-600 dark:text-rose-200 hover:bg-rose-100 border-rose-200 dark:bg-rose-600/60 dark:hover:bg-rose-600/80 flex gap-x-1 items-center' onClick={()=>handleClick('all')}>
      <span className='hidden xs:inline'>Note non achevées</span>
      <span className='text-lg py-0.5'><MdRemoveDone/></span>
    </button>
  }else{
    stateNoteButton = 
    <button className='button-base bg-neutral-300/80 text-gray-700 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-600/60 dark:hover:bg-neutral-600/90 flex gap-x-1 items-center' onClick={()=>handleClick('done')}>
      <span className='hidden xs:inline'>Tous les notes</span>
      <span className='text-lg py-0.5'><BiGridAlt/></span>
    </button>
  }

  return (
    <div className='pb-2 mb-6'>
      <h1 className='text-3xl text-center pb-4 pt-8 md:pt-12 font-medium text-slate-400/70 tracking-widest dark:text-gray-500'>MemoS</h1>
      <p className='text-center text-sm pb-4 md:pb-8 text-slate-400 dark:text-gray-400'>Gardez vos notes quotidiennes</p>
      <div className='flex items-end justify-between gap-x-3 px-2'>
        <div className="flex gap-x-2">
          <button className='button-base bg-neutral-200/80 text-gray-600 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700/60 dark:hover:bg-neutral-700/90 flex gap-x-1 items-center' onClick={()=>onOpenAddModal()}>
            <span className='hidden xs:inline'>Ajouter</span>
            <span className='text-lg py-0.5'><MdPostAdd/></span></button>
          {stateNoteButton}
          
        </div>
        <div className='flex gap-x-3 md:gap-x-4 items-end'>
          {/* <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="done" id="done" className='border-none' onChange={handleChange}/>
            <label className='text-sm text-gray-400' htmlFor="done">Achevé</label>
          </div> */}
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
import React from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { MdDoneAll, MdRemoveDone } from 'react-icons/md' 

export const InputText = ({name, value, maxLength, placeholder, onChange}) => {

  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }

  return (
    <input type="text" id={name} name={name} maxLength={maxLength} placeholder={placeholder} value={value} onChange={handleChange} className='input-base px-1 placeholder:text-slate-400 placeholder:font-light'/>
  )
}

export const TextArea = ({name, value, maxLength, placeholder, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <textarea id={name} name={name} maxLength={maxLength} placeholder={placeholder}  value={value}  onChange={handleChange} className='input-base resize-none px-1 placeholder:text-slate-400 placeholder:font-light'></textarea>
  )
}

export const InputDate = ({name, value, min, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <input type="date" name={name} id={name} min={min}  value={value} onChange={handleChange} className='input-base px-1'/>
  )
}

export const InputTime = ({name, value, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <input type="time" name={name} id={name}  value={value} onChange={handleChange} className='input-base px-1'/>
  )
}

export const ButtonStateNote = ({onButtonClick, state}) => {
  let className = 'button-base flex gap-x-2 items-center'
  let text = 'All tasks'
  let icon = <BiGridAlt/>
  if(state === 'done') {
    className += ' bg-emerald-200/80 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-200 border-emerald-300 dark:bg-emerald-700/70 dark:hover:bg-emerald-700/60'
    text = 'Completed Tasks'
    icon = <MdDoneAll/>
  }else if(state === 'not_done'){
    className += 'bg-rose-100/80 text-rose-600 dark:text-rose-200 hover:bg-rose-100 border-rose-200 dark:bg-rose-600/60 dark:hover:bg-rose-600/70'
    text = 'Unfinished Tasks'
    icon = <MdRemoveDone/>
  }else {
    className += ' bg-neutral-300/80 text-gray-700 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-600/60 dark:hover:bg-neutral-600/90'
  }
  return (
    <button className={className} onClick={onButtonClick}>
      <span className='hidden sm:inline'>{text}</span>
      <span className='text-lg py-0.5'>{icon}</span>
    </button>
  )
}

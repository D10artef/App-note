import React from 'react'

export const InputText = ({name, value, maxLength, placeholder, onChange}) => {

  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }

  return (
    <input type="text" id={name} name={name} maxLength={maxLength} placeholder={placeholder} value={value} onChange={handleChange} className='input-base px-1'/>
  )
}

export const TextArea = ({name, value, maxLength, placeholder, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <textarea id={name} name={name} maxLength={maxLength} placeholder={placeholder}  value={value}  onChange={handleChange} className='input-base resize-none px-1'></textarea>
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

export const ButtonStateNote = ({onButtonClick, state, children}) => {
  let className = 'button-base flex gap-x-1 items-center '
  if(state === 'note') {
    className += ' bg-emerald-200/80 text-emerald-700 dark:text-emerald-200 hover:bg-emerald-200 border-emerald-300 dark:bg-emerald-700/70 dark:hover:bg-emerald-700/60'
  }else if(state === 'not_done'){
    className += ' text-rose-600 dark:text-rose-200 hover:bg-rose-100 border-rose-200 dark:bg-rose-600/60 dark:hover:bg-rose-600/80'
  }else {
    className += ' bg-neutral-300/80 text-gray-700 dark:text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-600/60 dark:hover:bg-neutral-600/90'
  }
  return (
    <button className={className} onClick={onButtonClick}>
      {children}
    </button>
  )
}

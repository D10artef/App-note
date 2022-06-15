import React from 'react'

export const InputText = ({name, value, maxLength, placeholder, onChange}) => {

  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }

  return (
    <input type="text" id={name} name={name} maxLength={maxLength} placeholder={placeholder} value={value} onChange={handleChange} className='input-base'/>
  )
}

export const TextArea = ({name, value, maxLength, placeholder, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <textarea id={name} name={name} maxLength={maxLength} placeholder={placeholder}  value={value}  onChange={handleChange} className='input-base resize-none'></textarea>
  )
}

export const InputDate = ({name, value, min, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <input type="date" name={name} id={name} min={min}  value={value} onChange={handleChange} className='input-base'/>
  )
}

export const InputTime = ({name, value, onChange}) => {
  const handleChange = (event) => {
    onChange({name, value:event.target.value})
  }
  return (
    <input type="time" name={name} id={name}  value={value} onChange={handleChange} className='input-base'/>
  )
}
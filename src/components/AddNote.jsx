import React, { useState } from 'react'
import { getDateNow, getTimeNow } from '../utilities/UtilitiesFunction'
import {InputText, TextArea, InputDate, InputTime} from './Form'
import {MdPostAdd} from 'react-icons/md'

const AddNote = ({onCloseModal, onSaveNewNote}) => {
  const [newNote, setNewNote] = useState({
    id: Date.now(),
    title: '',
    content: '',
    location: '',
    done: false,
    date: getDateNow(),
    time: getTimeNow(),
  })
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')


  const handleChange = (data) => {
    const {name, value} = data
    setNewNote({...newNote, [name]:value})
  }
  const resetNewNote = () => setNewNote({
    id: Date.now(),
    title: '',
    content: '',
    location: '',
    done: false,
    date: getDateNow(),
    time: getTimeNow(),
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const note = { ...newNote,
      id: Date.now(),    
      add_date: Date.now(),
    }
    if(note.title.length >= 5){
      onSaveNewNote(note)
      resetNewNote()
      onCloseModal()
    }else{
      setError(true)
      setErrorText('Title is too short (min: 5)')
      setTimeout(() => setError(false), 3300)
    }
    
  }

  const handleReset = (event) => {
    event.preventDefault()
    resetNewNote()
    setError(false)
    setErrorText('')
    onCloseModal()
  }


  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className='flex flex-col gap-3 w-72 md:w-96 px-3 py-4 border dark:border-none shadow bg-neutral-50 dark:bg-header-card-dark'>
      <h1 className='flex gap-x-2 justify-center items-scretch font-semibold text-tiny tracking-wider text-slate-600/70 dark:text-slate-300 mb-2'><span>New task</span><span className='text-xl'><MdPostAdd/></span></h1>
      <InputText value={newNote.title} onChange={handleChange} name='title' maxLength={35} placeholder='Title'></InputText>
      <InputText value={newNote.location} onChange={handleChange} name='location' maxLength={35} placeholder='Place (Optional)'></InputText>
      <TextArea value={newNote.content} onChange={handleChange} name='content' maxLength={100} placeholder='Description (Optional)'></TextArea>
      <div className="flex gap-x-3 gap-y-2 items-end">
        <div>
          <label htmlFor="date" className='text-xtiny font-medium dark:text-slate-400 text-slate-600 mr-2'>Planned date</label>
          <InputDate value={newNote.date} min={getDateNow()} name='date' onChange={handleChange}></InputDate>
        </div>
        <InputTime value={newNote.time} onChange={handleChange} name='time'></InputTime>
      </div>
      {error ? 
        <div className='text-center px-2 py-1.5 bg-rose-50 border border-rose-500 dark:bg-rose-700 dark:border-rose-700'>
          <p className='text-xs text-rose-500 dark:text-rose-200'>{errorText}</p>
        </div>
        : ''
      }
      <div className='flex justify-end gap-x-3'>
        <button type="reset" className='button-base bg-gray-300/50 hover:bg-gray-300/70 text-gray-600 mt-2'>Cancel</button>
        <button type="submit" className='button-base bg-slate-600 hover:bg-slate-700 text-slate-50 dark:bg-gray-700 dark:hover:bg-slate-700 mt-2'>Add</button>
      </div>
    </form>
  )
}

export default AddNote
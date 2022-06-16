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
    onSaveNewNote(note)
    resetNewNote()
    onCloseModal()
  }

  const handleReset = (event) => {
    event.preventDefault()
    resetNewNote()
    onCloseModal()
    
  }


  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className='flex flex-col gap-3 w-72 md:w-96 px-3 py-4 border dark:border-none rounded-sm md:rounded shadow bg-neutral-50 dark:bg-header-card-dark'>
      <h1 className='flex gap-x-2 justify-center items-scretch font-semibold text-tiny tracking-wider text-slate-600/70 dark:text-slate-500 mb-2'><span>Nouvelle Note </span><span className='text-xl'><MdPostAdd/></span></h1>
      <InputText value={newNote.title} onChange={handleChange} name='title' maxLength={35} placeholder='Titre'></InputText>
      <InputText value={newNote.location} onChange={handleChange} name='location' maxLength={35} placeholder='Lieu (optionel)'></InputText>
      <TextArea value={newNote.content} onChange={handleChange} name='content' maxLength={100} placeholder='Decription (optionelle)'></TextArea>
      <div className="flex gap-x-3 gap-y-2 items-end">
        <div>
          <label htmlFor="date" className='text-xtiny font-medium text-slate-600'>Prévu le </label>
          <InputDate value={newNote.date} min={getDateNow()} name='date' onChange={handleChange}></InputDate>
        </div>
        <InputTime value={newNote.time} onChange={handleChange} name='time'></InputTime>
      </div>
      <div className='flex justify-end gap-x-3'>
        <button type="reset" className='button-base bg-gray-200/70 hover:bg-gray-100/70 text-gray-600 mt-2'>Annuler</button>
        <button type="submit" className='button-base bg-slate-600 hover:bg-slate-700 text-slate-50 dark:bg-gray-700 dark:hover:bg-slate-700 mt-2'>Ajouter</button>
      </div>
    </form>
  )
}

export default AddNote
import React, { useState, useEffect } from 'react'
import AddNote from './components/AddNote'
import ConfirmNoteDeletion from './components/ConfirmNoteDeletion'
import Header from './components/Header'
import Modal from './components/Modal'
import FieldNotes from './components/FieldNotes'
import { compareNoteByDate, getDateNow } from './utilities/UtilitiesFunction'
import {STATES} from './utilities/UtilitiesCONST'


const NOTES_KEY = 'react-note-app'

const App = () => {
  const [notes, setNotes] = useState([])
  const [deletedNote, setDeletedNote] = useState([])
  const [searchFilter, setSearchFilter] = useState({
    text: '',
    state: STATES[0],
  })
  const [showAddModal, setShowAddModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  // Load notes from web storage
  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem(NOTES_KEY))
    if(savedNotes && savedNotes.length > 0){
      setNotes(savedNotes)
    }
  }, [])

  // Save notes from storage when notes array was updating (Add/Remove/Update value)
  useEffect(()=> {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
  },[notes])

  const closeAddModal = () => {
    setShowAddModal(false)
  }

  const openAddModal = () => {
    setShowAddModal(true)
  }

  const closeConfirmModal = () => {
    setShowConfirmModal(false)
  }

  const openConfirmModal = (array) => {
    // setDeletedId(id)
    setDeletedNote(array)
    setShowConfirmModal(true)
  }

  // Save new Note
  const handleSaveNewNote = (newNote) => {
    const newNotes = [newNote, ...notes]
    setNotes(newNotes)
  }

  const getNoteIndex = (arr, id) => {
    return arr.findIndex(el => el.id === id)
  }

  // Toggle note if it is done or not
  const handleToggleNote = (id) => {
    const noteIndex = getNoteIndex(notes, id)
    const note = {...notes.find(el => el.id === id)}
    note.done = !note.done
    if(noteIndex === -1){
      setNotes([...notes, note])
      return
    }
    const updatedNotes = [...notes]
    updatedNotes[noteIndex] = note
    setNotes(updatedNotes)
  }

  // Delete notes from the array
  const handleDeleteNotes = (notesToDelete) => {
    const updatedNotes = notes.filter(note => ! notesToDelete.includes(note))
    setNotes(updatedNotes)
    setDeletedNote([])
  }

  const handleSearchFilterChange = (name, value) => {
    setSearchFilter((prev) => {
      return{
        ...prev,
        [name]:value,
      }
    })
  }

  function filterNotes(data, filter){
    if(filter.state === STATES[1]){
      return data.filter(note => ((note.title.toLowerCase().includes(filter.text.toLowerCase()) || note.content.toLowerCase().includes(filter.text.toLowerCase())) && note.done))
    }else if(filter.state === STATES[2]){
      return data.filter(note => ((note.title.toLowerCase().includes(filter.text.toLowerCase()) || note.content.toLowerCase().includes(filter.text.toLowerCase())) && !note.done ))
    }else{
      return data.filter(note => (note.title.toLowerCase().includes(filter.text.toLowerCase()) || note.content.toLowerCase().includes(filter.text.toLowerCase())))
    }
  }

  function todayNotes(){
    return notes
		.filter((note) => note.date === getDateNow());
  }
  
  function otherNotes() {
	  return notes
		  .filter((note) => note.date !== getDateNow())
		  .sort(compareNoteByDate);
  }

  return (
    <div className='min-h-screen bg-neutral-100 text-zinc-800 dark:bg-[#242432] dark:text-neutral-300'>
      <Header onOpenAddModal={openAddModal} onSearchFilterChange={handleSearchFilterChange} state={searchFilter.state}></Header>
      <Modal show={showAddModal} onClose={closeAddModal}>
        <AddNote onSaveNewNote={handleSaveNewNote} onCloseModal={closeAddModal} />
      </Modal>
      <Modal show={showConfirmModal} onClose={closeConfirmModal}>
        <ConfirmNoteDeletion deletedNote={deletedNote} onCloseModal={closeConfirmModal} onConfirmDelete={handleDeleteNotes}></ConfirmNoteDeletion>
      </Modal>
      
      <FieldNotes title="Aujourd'hui" filtredNotes={filterNotes(todayNotes(), searchFilter)} handleToggleNote={handleToggleNote} openConfirmModal={openConfirmModal} fieldKey='today'></FieldNotes>
      <FieldNotes title='Autres' filtredNotes={filterNotes(otherNotes(), searchFilter)} handleToggleNote={handleToggleNote} openConfirmModal={openConfirmModal} fieldKey='other'></FieldNotes>
    </div>
  )
}

export default App
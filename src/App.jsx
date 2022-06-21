import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import ConfirmNoteDeletion from './components/ConfirmNoteDeletion'
import Header from './components/Header'
import Modal from './components/Modal'
import { compareNoteByDate, getDateNow } from './utilities/UtilitiesFunction'

const NOTES_KEY = 'react-note-app'
const STATES = ['all', 'done', 'not_done']

const App = () => {
  const [notes, setNotes] = useState([])
  const [deletedId, setDeletedId] = useState(null)
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

  const openConfirmModal = (id) => {
    setDeletedId(id)
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

  // Delete note from the array
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    setDeletedId(null)
  }

  // const handleSearchTextChange = (value) => {
  //   setSearchtext(value)
  // }

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
        <ConfirmNoteDeletion id={deletedId} onCloseModal={closeConfirmModal} onConfirmDelete={handleDeleteNote}></ConfirmNoteDeletion>
      </Modal>
      <div>
        <h1 className="mx-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b-2 py-1 mb-1 border-gray-200 dark:border-gray-700">Aujourd'hui</h1>
        {
          todayNotes() && filterNotes(todayNotes(), searchFilter).length > 0 ?
          <Notes onToggleNote={handleToggleNote} onConfirmDeletion={openConfirmModal} notes={filterNotes(todayNotes(), searchFilter)}></Notes>
          : <div className='font-light text-slate-400/50 text text-center p-6'><span >Aucune  note</span></div>
        }
      </div>
      <div>
        <h1 className="mx-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b-2 py-1 mb-1 border-gray-200 dark:border-gray-700">Autres</h1>
        {
          otherNotes() && filterNotes(otherNotes(), searchFilter).length > 0 ?
          <Notes onToggleNote={handleToggleNote} onConfirmDeletion={openConfirmModal} notes={filterNotes(otherNotes(), searchFilter)}></Notes>
          : <div className='font-light text-slate-400/50 text text-center p-6'><span >Aucune  note</span></div>
        }
      </div>
    </div>
  )
}

export default App
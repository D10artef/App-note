import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import Header from './components/Header'
import Modal from './components/Modal'

const NOTES_KEY = 'react-note-app'

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   id:1,
    //   title: 'test',
    //   content: 'Lorem ispum esperarar',
    //   location:'At home',
    //   done: false,
    // },
    // {
    //   id:2,
    //   title: 'essaye',
    //   content: 'Lorem ispum esperarar',
    //   location: 'ISPM',
    //   done: true,
    // }
  ])
  const [showAddModal, setShowAddModal] = useState(true)

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

  // Save new Note
  const handleSaveNewNote = (newNote) => {
    const newNotes = [newNote, ...notes]
    setNotes(newNotes)
  }

  const getTodoIndex = (arr, id) => {
    return arr.findIndex(el => el.id === id)
  }

  // Toggle Todo if it is done or not
  const handleToggleNote = (id) => {
    const noteIndex = getTodoIndex(notes, id)
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

  return (
    <div className='min-h-screen bg-neutral-100 text-zinc-800 dark:bg-[#242432] dark:text-neutral-300'>
      <Header></Header>
      <Modal show={showAddModal} onClose={closeAddModal}>
        <AddNote onSaveNewNote={handleSaveNewNote} onCloseModal={closeAddModal} />
      </Modal>
      <Notes onToggleNote={handleToggleNote} notes={notes}></Notes>
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'

const NOTES_KEY = 'react-note-app'

const App = () => {
  const [notes, setNotes] = useState([])

  // Load notes from web storage
  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem(NOTES_KEY))
    if(savedNotes && !savedNotes.length){
      setNotes(savedNotes)
    }
  }, [])

  // Save notes from storage when notes array was updating (Add/Remove/Update value)
  useEffect(()=> {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
  },[notes])

  return (
    <div>
      <Notes notes={notes}></Notes>
    </div>
  )
}

export default App
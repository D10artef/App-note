import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import Header from './components/Header'

const NOTES_KEY = 'react-note-app'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id:1,
      title: 'test',
      content: 'Lorem ispum esperarar',
      location:'At home',
      done: false,
    },
    {
      id:2,
      title: 'essaye',
      content: 'Lorem ispum esperarar',
      location: 'ISPM',
      done: true,
    }
  ])

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
    <div className='min-h-screen bg-neutral-100 text-zinc-800 dark:bg-[#242432] dark:text-neutral-300'>
      <Header></Header>
      <Notes notes={notes}></Notes>
    </div>
  )
}

export default App
import React from 'react'
import {MdClose} from 'react-icons/md'

const Modal = ({show, children, onClose}) => {
  let showHideClass = 'fixed inset-0 w-full min-h-screen h-full backdrop-blur-sm bg-gray-900/50 dark:bg-gray-700/50'
  showHideClass += show ? ' block' : ' hidden'

  return (
    <div className={showHideClass}>
      <MdClose className='fixed top-2 right-2 text-slate-100 dark:text-slate-400 cursor-pointer' onClick={onClose}></MdClose>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{children}</div>
    </div>
  )
}

export default Modal
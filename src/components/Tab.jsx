import React from 'react'

const Tab = ({title, onClickTabItem, active = false}) => {
  let tabClass = 'text-sm font-semibold pb-.5 px-2 block'
  const activeClass = ' border-b-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 dark:border-indigo-400'
  tabClass += active ? activeClass : ''
  const onClickTab = (event) => {
    event.preventDefault()
    onClickTabItem(title)
  }
  return (
    <li className={tabClass} onClick={onClickTab}>{title}</li>
  )
}

export default Tab
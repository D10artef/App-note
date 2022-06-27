import React from 'react'

const Tab = ({title, onClickTabItem, active = false}) => {
  let tabClass = 'text-sm font-semibold pb-.5 px-2 block'
  const activeClass = ' border-b-2 border-indigo-700 text-indigo-700 dark:text-indigo-500 dark:border-indigo-500'
  tabClass += active ? activeClass : ''
  const onClickTab = (event) => {
    event.preventDefault()
    onClickTabItem(title)
    console.log(title);
  }
  return (
    <li className={tabClass} onClick={onClickTab}>{title}</li>
  )
}

export default Tab
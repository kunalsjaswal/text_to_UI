import React, { useState } from 'react'
import ChatBot from '../chatbot/ChatBot'

const IframePage = () => {
  const [ isOpen, setIsOpen] = useState(false)

  const onToggleHandler = (ev)=>{
    setIsOpen(prev => !prev)
  }
  return (
    <>
        <iframe 
            title='Client-project'
            style={{
              position:"absolute",
              width: "100%",
              height: "99.5%",
              zIndex:0
            }}
          src='http://localhost:3001'
          >
          </iframe>
        <ChatBot isOpen = {isOpen} setIsOpen={setIsOpen} onToggleHandler = {onToggleHandler}/>
    </>
  )
}

export default IframePage
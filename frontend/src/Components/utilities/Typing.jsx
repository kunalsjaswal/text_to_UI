import React from 'react'
import { TypingDiv } from './style'

const Typing = ({background, color}) => {
  return (
    <TypingDiv style={{background : background}}>
        <div className="dot1" style={{background : color}}></div>
        <div className="dot2" style={{background : color}}></div>
        <div className="dot3" style={{background : color}}></div>
    </TypingDiv>
  )
}

export default Typing
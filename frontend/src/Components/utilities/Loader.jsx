import { LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import robotGIF from '../../images/robotMoving.gif'
import { LoaderStyleDiv } from './style'

const Loader = ({message}) => {

  return (
    <LoaderStyleDiv>

          <img src={robotGIF} alt="robot" className='img-loading'/>
          
    </LoaderStyleDiv>
  )
}

export default Loader
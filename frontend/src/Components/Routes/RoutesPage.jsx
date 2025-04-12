import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Homepage/HomePage'
import IframePage from '../Iframe/IframePage'
import Docs from '../Homepage/util/Docs'
import TemplateFiles from '../Templates/TemplateFiles'
import About2 from '../Homepage/util/About2'

const RoutesPage = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route index element={<About2/>}/>
          <Route path="documentation" element={<Docs/>}/>
        </Route>
        <Route path='/templates' element={<TemplateFiles/>}/>
        <Route path='/playground' element={<IframePage/>}/>
        
    </Routes>
  )
}

export default RoutesPage
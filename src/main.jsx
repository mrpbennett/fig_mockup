import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import FigRoutes from './components/routes'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <FigRoutes />
  </BrowserRouter>,
  document.getElementById('root'),
)

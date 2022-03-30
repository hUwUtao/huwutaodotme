import React, { StrictMode as StrictContainer } from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

import './index.css'

import App from './App'

ReactDOM.render(
  <StrictContainer>
    <App />
  </StrictContainer>,
  document.getElementById('root')
)

import React, { StrictMode as StrictDOM } from 'react'
import ReactDOM from 'react-dom'

import './util/setupTests'
import './util/analytics'
import './util/sentry'

import './styles/index.scss'

import App from './App'

ReactDOM.render(
  <StrictDOM>
    <App />
  </StrictDOM>,
  document.getElementById('root')
)

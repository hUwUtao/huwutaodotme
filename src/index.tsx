import React, { StrictMode as StrictDOM } from 'react'
import ReactDOM from 'react-dom'
import env from './env'

import './styles/index.css'

import App from './App'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: env.gaTracker,
}

TagManager.initialize(tagManagerArgs)

const STRICTMODE = (
    <StrictDOM>
      <App />
    </StrictDOM>
  ),
  NORMALMODE = <App />

ReactDOM.render(
  env.strictmod ? STRICTMODE : NORMALMODE,
  document.getElementById('root')
)

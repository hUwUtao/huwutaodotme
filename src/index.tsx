import React, { StrictMode as StrictDOM } from 'react'
import ReactDOM from 'react-dom'
import env from './env'

import './util/setupTests'

import './styles/index.scss'

import App from './App'

import ReactGA from 'react-ga'

import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

ReactGA.initialize(env.gaTracker)
ReactGA.pageview(window.location.pathname + window.location.search)

Sentry.init({
  dsn: env.sentryDSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <StrictDOM>
    <App />
  </StrictDOM>,
  document.getElementById('root')
)

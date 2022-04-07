import env from '../env'
import ReactGA from 'react-ga'
ReactGA.initialize(env.gaTracker)
ReactGA.pageview(window.location.pathname + window.location.search)

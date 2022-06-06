import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalSuspense from './components/GlobalSuspense'

const Home = lazy(() => import('./pages/Home'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<GlobalSuspense />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

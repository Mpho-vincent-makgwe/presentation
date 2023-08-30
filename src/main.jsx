import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Presentation from './Components/Presentation.jsx'

// Components -> Layouts
import Introduction from './pages/Introduction'
import UnderstandingReact from './pages/UnderstandingReact'
import TheRoleOfRouting from './pages/TheRoleOfRouting'
import KeyRoutingConcepts from './pages/KeyRoutingConcepts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/presentation' element={<Presentation />}>
          <Route path="Introduction" element={<Introduction />} />
          <Route path="UnderstandingReact" element={<UnderstandingReact />} />
          <Route path="TheRoleOfRouting" element={<TheRoleOfRouting />} />
          <Route path="KeyRoutingConcepts" element={<KeyRoutingConcepts />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'routes/Home'
import Features from 'routes/Features'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

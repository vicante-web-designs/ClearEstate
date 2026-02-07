import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateListingPage from './pages/CreateListingPage'
import { ListingContext } from './context/context'
import { useState } from 'react'

function App() {
  const [listings, setListings] = useState('help');

  return (
      <ListingContext.Provider value={listings}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/createListings' element={<CreateListingPage />} />
          </Routes>
        </Router>
      </ListingContext.Provider>
  )
}

export default App

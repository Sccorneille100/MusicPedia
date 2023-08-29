import React, { useState } from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter an artist's name.");
      return;
    }

    try {
      const response = await fetch(`/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data.artistNames);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data.');
    }
  };

  return (
    <div className="App">
      <h1>Artist Search</h1>
      <input
        type="text"
        placeholder="Enter an artist's name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="results">
        {searchResults.length > 0 ? (
          <div>
            <h2>Search Results for "{searchTerm}":</h2>
            <ul>
              {searchResults.map((artist, index) => (
                <li key={index}>{artist}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
  
}

export default App;

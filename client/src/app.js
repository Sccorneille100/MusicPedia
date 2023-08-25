import React, { useState } from 'react';
//import './App.css';

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
    </div>
  );
}

export default App;

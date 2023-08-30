import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) {
        alert("Please enter an artist's name, album, or song.");
        return;
    }

    let data; 

    try {
        const response = await fetch(`/artists/search?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        data = await response.json(); 

        // Log the Last.fm API response
        console.log('Last.fm Artist Search Response:', data);

        setSearchResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data.');
    }

    try {
        const saveResponse = await fetch('/search-results/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ results: data }), 
        });
        if (!saveResponse.ok) {
          throw new Error('Error saving search results');
        }
      } catch (error) {
        console.error('Error saving search results:', error);
      }
};

  return (
    <div className="App">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Enter an artist's name, album, or song"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="results">
        {searchResults.length > 0 ? (
            <div>
                <h2>Search Results for "{searchTerm}":</h2>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>
                            {result.type === 'artist' ? (
                                <span>Artist: {result.name}</span>
                            ) : result.type === 'album' ? (
                                <span>Album: {result.name}</span>
                            ) : result.type === 'song' ? (
                                <span>Song: {result.name}</span>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Header from './components/Header'
import LoginForm from './components/Login'
import SignupForm from './components/Register'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


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
      <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<SignupForm />} />
          </Routes>
        </div>
      </Router>
      </ApolloProvider>
    </div>
  );
  
}

export default App;

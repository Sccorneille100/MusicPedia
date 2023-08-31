import React from 'react'
import Routes1 from './Routes1'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Routes1 />
    </Provider>
  )
}

export default App

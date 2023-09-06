import { useState } from 'react'
import { UserProvider } from './Context/UseContext'
import Home from './Pages/Home'

function App() {

  return (
    <UserProvider>
      <div className="App">
        <Home/>
      </div>
    </UserProvider>
  )
}

export default App

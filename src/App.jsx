import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceContainer from './components/HooksIceContainer'
import store from "./redux/store"

function App() {

  return (
      <div className='app'>
        <HooksCakeContainer/>
        <HooksIceContainer/>
      </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Download from './components/Download'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component=""/>
      </Routes>
    </BrowserRouter>
    <div className="flex items-center justify-center mb-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="" alt="React logo" />
        </a>
      </div>
      <h1>Elijah Adams</h1>
      <div className="card">
        <p>
          ...coming soon
        </p>
      </div>
      <Download />
    </>
  )
}

export default App

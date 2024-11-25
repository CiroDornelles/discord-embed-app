/**
 * @file App.jsx
 * @description This is the main App component for the React/Vite starter
 * template. It contains the Vite and React logos, a counter that increments
 * when the button is clicked, and a short description of the app.
 *
 * @author 0x1adrian
 */

import { DiscordSDK } from '@discord/embedded-app-sdk'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Inicializa o SDK apenas se estivermos dentro do Discord
let sdk = null
if (new URLSearchParams(window.location.search).has('frame_id')) {
  sdk = new DiscordSDK('1310531993469190164')
}

/**
 * The main App component.
 * @returns {JSX.Element} The App component.
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

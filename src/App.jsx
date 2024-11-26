import CharacterSheet from './CharacterSheet'
import { DiscordSDK } from '@discord/embedded-app-sdk'
import { useState, useEffect } from 'react'
import './App.css'

// Inicializa o SDK apenas se estivermos dentro do Discord
let sdk = null
if (new URLSearchParams(window.location.search).has('frame_id')) {
  sdk = new DiscordSDK('1310531993469190164')
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CharacterSheet />
    </div>

  )
}

export default App

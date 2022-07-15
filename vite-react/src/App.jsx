import { useState } from 'react'
import elvLogo from './assets/Elv.png'
import mauLogo from './assets/Mau.png'
import heartLogo from './assets/3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.instagram.com/shakira_ruso/" target="_blank">
          <img src={elvLogo} className="logo Elv" alt="Elv face" />
        </a>
        <a href="https://www.instagram.com/wakeup.mau/" target="_blank">
          <img src={mauLogo} className="logo Mau" alt="Mau face" />
        </a>
      </div>
      <h1>Elv + Mau</h1>
      <div>
      <a href="https://t.me/+hRga0abw_aQ4ZmRh" target="_blank">
          <img src={heartLogo} className="Heart" alt="Heart" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => ++count)}>
          love is {count}
        </button>
        <button onClick={() => setCount((count) => count + 999)}>
          love is {count}
        </button>
        <p>
          Counts for the number of kisses they'll have when they finally meet!
        </p>
      </div>
      <p className="read-the-docs">
        How can they be so in love? it's hard to believe.
      </p>
    </div>
  )
}

export default App

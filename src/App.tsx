import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensagem } from './mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Mensagem texto={"Hello There, David"}/>
    </main>
  )
}

export default App

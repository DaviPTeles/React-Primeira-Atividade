import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mensagem } from './mensagem'
import { Saudacao } from './saudacao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Saudacao nome={'Davi'} idade={21}/>
      <Saudacao nome={'Abraão'} idade={15}/>
    </main>
  )
}

export default App

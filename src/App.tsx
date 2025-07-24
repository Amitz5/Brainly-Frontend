import { useState } from 'react'
import './App.css'
import { Button } from './Components/Button'
import { PlusIcon } from './icons/Plusicon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button startIcon = {<PlusIcon size={"sm"}/>} size = "sm" variant ="primary" text ="share"/>
      <Button size ="lg" variant ="secondary" text ="Add Content"/>
    </>
  )
}

export default App

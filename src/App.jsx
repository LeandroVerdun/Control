import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Grid from './components/Grid-Maquina';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Grid />
     
  
    </>
  )
}

export default App

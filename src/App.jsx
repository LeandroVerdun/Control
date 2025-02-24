import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Grid from './components/Grid-Maquina';
import Tabla from './components/Trazabilidad';
import Desp from './components/EmpDesp';
import Peso from './components/Peso';

function App() {
  const [componente, setComponente] = useState(null); 

  const handleMaquinaClick = () => {
    setComponente(<Grid />); 
  };

  const handleTrazabilidadClick = () => {
    setComponente(<Tabla />); 
  };

  const handleEmpanadasClick = () => {
    setComponente(<Desp />); 
  };

  const handlePesoClick = () => {
    setComponente(<Peso />); 
  };

  return (
    <>
      <Navbar 
        onMaquinaClick={handleMaquinaClick} 
        onTrazabilidadClick={handleTrazabilidadClick}
        onEmpanadasClick={handleEmpanadasClick}  
        onPesoClick={handlePesoClick} 
      />
      <div>
        {componente} {}
      </div>

    </>
  );
}

export default App;

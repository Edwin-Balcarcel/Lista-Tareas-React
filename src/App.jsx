import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

function App() {
  
  //obtenemos las tareas guardadas del localStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  //Accedemos al localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas;
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  }else{
    //si el valor es el string true nos retorna el booleano: true
     configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //establecemos el estado de las tareas 
  const [tareas, setTareas] = useState(tareasGuardadas);

  //mostrarCompletadas, estado
  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);

  //Guardar el valor booleano de las tareas completadas
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
  }, [mostrarCompletadas])

  //Guardando el estado de tareas en el localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])

  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        setMostrarCompletadas={setMostrarCompletadas} 
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas 
        tareas={tareas} 
        setTareas={setTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>

  )
}

export default App

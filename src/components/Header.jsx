import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({mostrarCompletadas, setMostrarCompletadas}) => {

  return (
    <header className="header">
        <h1 className="header__titulo">Lista de Tareas</h1>
          {mostrarCompletadas ?
              <button 
                className="header__boton"
                onClick={() => setMostrarCompletadas(!mostrarCompletadas)}
              >
                No mostrar completadas
                <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
              </button>
           :
              <button 
                className="header__boton"
                onClick={() => setMostrarCompletadas(!mostrarCompletadas)}
              >
                Mostrar completadas
                <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
              </button>
          }
    </header>
  )
}

export default Header
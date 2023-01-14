import "bootstrap/dist/css/bootstrap.css";

const Navegacion = (props) => (
    <nav>
        <ul className="nav bg-dark">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recetas</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Sobre Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contactos</a></li>
        </ul>
    </nav>
)

export default Navegacion;
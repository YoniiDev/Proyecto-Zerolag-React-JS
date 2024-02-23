import '../sass/navbar.scss'
import { Link } from 'react-router-dom';
import { CartWidget } from "./CartWidget";
import { Searchbar } from "./Searchbar";
import { TogglerNavbar } from "./TogglerNavbar";
import { LoginUser } from "./LoginUser";
import { Categories } from './Categories';
export const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="header_navbar_contenedor">
                    <div className="header_contenedor">

                        <div className="boton_navbar_y_logo_navbar_contenedor">
                            {/*ALTERNADOR DE LA BARRA DE NAVEGACIÓN*/}
                            <TogglerNavbar />
                            <Link to={'/'} className='nav-link'>
                                <p className="logo_navbar"><span>Z</span>ero<span>L</span>ag</p>
                            </Link>
                        </div>
                        {/*BARRA DE BUSQUEDA*/}
                        <Searchbar />
                        {/* INICIAR SESION DE USUARIO*/}
                        <LoginUser />
                        {/* CARRITO DE PRODUCTOS */}
                        <CartWidget />
                    </div>
                    {/* BARRA DE NAVEGACION */}
                    <div className="navbar_contenedor collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-lg-0 container-fluid d-flex justify-content-around">
                            <Categories />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


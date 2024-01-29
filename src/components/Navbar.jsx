import { CartWidget } from "./CartWidget";
import { Searchbar } from "./Searchbar";
import { TogglerNavbar } from "./TogglerNavbar";
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
            <div className="header_navbar_contenedor">
                <div className="header_contenedor">
                    
                    <div className="boton_navbar_y_logo_navbar_contenedor">
                        {/*ALTERNADOR DE LA BARRA DE NAVEGACIÓN*/}
                        <TogglerNavbar/>
                        <a className="logo_navbar navbar-brand" href="./index.html"><span>Z</span>ero<span>L</span>ag</a>
                    </div>
                    {/*BARRA DE BUSQUEDA*/}
                    <Searchbar/>
                    {/* CARRITO DE PRODUCTOS */}
                    <CartWidget/>
                </div>
                {/* BARRA DE NAVEGACION */}
                <div className="navbar_contenedor collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-lg-0 container-fluid d-flex justify-content-around">
                        <li className="li_inicio">
                            <a className="a_inicio" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li className="li_nosotros">
                            <a className="a_nosotros" href="./pages/nosotros.html">Nosotros</a>
                        </li>
                        <li className="li_productos">
                            <a className="a_productos" href="./pages/productos.html">Productos</a>
                        </li>
                        <li className="li_servicios">
                            <a className="a_servicios" href="./pages/servicios.html">Servicios</a>
                        </li>
                        <li className="li_contacto">
                            <a className="a_contacto" href="./pages/contacto.html">Contacto</a>
                        </li>
                        <li className="li_experiencia">
                            <a className="a_experiencia" href="./pages/experiencia.html">Experiencia</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}


import { Link } from "react-router-dom";
export const Categories = () => {
    return (
        <>
            <li className="li_inicio">
                <Link to={'/'}>
                    <button className="a_inicio">Inicio</button>
                </Link>
            </li >
            <li className="li_nosotros">
                <Link to={'/nosotros'}>
                    <button className="a_nosotros">Nosotros</button>
                </Link>
            </li>
            <li className="li_productos">
                <Link to={'/products'}>
                    <button className="button_productos">Productos</button>
                </Link>
                <ul className="submenu_de_productos">
                    <li>
                        <Link to={'/category/Enfriamiento para pc'}>
                            <button>Enfriamiento para pc</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/SSD'}>
                            <button>SSD</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Mouse Gamer'}>
                            <button>Mouse Gamer</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Tarjeta de Video'}>
                            <button>Tarjeta de Video</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Monitor'}>
                            <button>Monitor</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Notebook Gamer'}>
                            <button>Notebook Gamer</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Teclado Gamer'}>
                            <button>Teclado Gamer</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Microfono streaming'}>
                            <button>Microfono Streaming</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Escritorio Gamer'}>
                            <button>Escritorio Gamer</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Pc Gamer'}>
                            <button>PC Gamer</button>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="li_servicios">
                <Link to={'/servicios'}>
                    <button className="a_servicios">Servicios</button>
                </Link>
            </li>
            <li className="li_contacto">
                <Link to={'/contacto'}>
                    <button className="a_contacto">Contacto</button>
                </Link>
            </li>
            <li className="li_experiencia">
                <Link to={'/experiencia'}>
                    <button className="a_experiencia">Experiencia</button>
                </Link>
            </li>
        </>
    );
}

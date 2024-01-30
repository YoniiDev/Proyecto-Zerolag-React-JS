export const Searchbar = () => {
    return (
        <form className="barra_de_busqueda container-fluid d-flex align-items-center" role="search">
            <input className="input_buscar form-control" type="search"
                placeholder="Busca el producto de tus sueños" aria-label="Search" />
            <button className="boton_buscar" type="submit">Buscar</button>
        </form>
    );
}
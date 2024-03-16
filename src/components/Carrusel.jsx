export const Carrusel = () => {
    return (
        <section className="hero_section">
            <div id="carrusel_hero_section" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carrusel_hero_section" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carrusel_hero_section" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carrusel_hero_section" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="imagen_corrusel_herosection carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosdesktop.jpg?alt=media&token=1991fc24-9de4-4146-a1ee-e85d49560af3" className="d-block w-100 d-none d-sm-block" alt="bienvenidos a las ofertas de apertura ZeroLag, hasta un 70% de descuento" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosmobilzerolag.jpg?alt=media&token=5b82f08c-7e03-47c9-aecb-59c1723f0c05" className="d-block w-100 d-sm-none" alt="bienvenidos a las ofertas de apertura ZeroLag, hasta un 70% de descuento" />
                    </div>
                    <div className="imagen_corrusel_herosection carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosdesktop2.jpg?alt=media&token=65f53177-726e-4a34-8ef2-c8bf3a1d2fe4" className="d-block w-100 d-none d-sm-block" alt="imagen de ofertas de apertura ZeroLag, PC Gamer ZEROLAG ORION, RTX 4070, Ryzen 5 5600X, RAM 16GB (2x8GB), SSD 1TB, Windows 11 Home, 20% de descuento a $1.199.990 con transferencia, precio normal $1.499.990. Unidad de Estado Sólido Kingston NV2, 1TB NVMe, PCIe 4.0, 62% de descuento, a $41.990 con transferencia, precio normal $109.990" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosmobilezerolag2.jpg?alt=media&token=f299f9cd-76c1-4c55-9dcb-5adb73aa6072" className="d-block w-100 d-sm-none" alt="imagen de ofertas de apertura ZeroLag, Unidad de Estado Sólido Kingston NV2, 1TB NVMe, PCIe 4.0, 62% de descuento, a $41.990 con transferencia, precio normal $109.990" />
                    </div>
                    <div className="imagen_corrusel_herosection carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosdesktop3.jpg?alt=media&token=ee400b9f-b564-4e45-96a6-30bbb936cbb3" className="d-block w-100 d-none d-sm-block" alt="imagen de ofertas de apertura ZeroLag, Teclado Mecánico Gamer Redragon Kumara K552, Switch Outemu Red, 45% de descuento, a $27.990 con transeferencia, precio normal $50.990. Enfriamiento Liquido ID-Cooling FrostFlow X, 280mm, Intel/AMD, Color Negro. 50% de descuento, a $54.990 con transferencia, precio normal $109.990." />
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bienvenidosmobilezerolag3.jpg?alt=media&token=d96c4e52-6104-4e6f-9886-3bf6ee25e43f" className="d-block w-100 d-sm-none" alt="imagen de ofertas de apertura ZeroLag, PC Gamer ZEROLAG ORION, RTX 4070, Ryzen 5 5600X, RAM 16GB (2x8GB), SSD 1TB, Windows 11 Home, 20% de descuento a $1.199.990 con transferencia, precio normal $1.499.990." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carrusel_hero_section" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carrusel_hero_section" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}
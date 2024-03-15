import '../sass/servicios.scss'
export const Servicios = () => {
    return (
        <section className="servicios">
            <h1 className='titulo_servicios_h1'>Servicios</h1>
            <div className="servicios_contenedor">
                <div className='tarjeta_de_servicio'>
                    <img className='imagen_del_servicio' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/reparacion2redimensionada.jpg?alt=media&token=3785789a-a998-4419-88cc-756244f66e11" alt="imagen de un profesional inspeccionando un Notebook" />
                    <div className="informacion_del_servicio">
                        <h2 className='titulo_del_servicio_h2'>Reparación</h2>
                        <p className='texto_del_servicio'>Nuestro servicio de reparación es sinónimo de confiabilidad y excelencia. Nuestro equipo de técnicos altamente capacitados está listo para abordar cualquier problema tecnológico que puedas enfrentar. Desde reparaciones de dispositivos hasta soluciones de software, ofrecemos un servicio rápido y eficiente que te permite volver a disfrutar de tus dispositivos tecnológicos sin interrupciones. Tu tranquilidad y la funcionalidad de tus dispositivos son nuestra prioridad número uno. Confía en ZeroLag para mantener tu tecnología en perfecto estado.
                        </p>
                        <a className='btn_contactanos' href="#">CONTACTANOS</a>
                    </div>
                </div>
                <div className='tarjeta_de_servicio'>
                    <img className='imagen_del_servicio' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/mantenci%C3%B3nredimensionada.jpg?alt=media&token=981e33cb-0dc6-4ad8-9024-dcb2710d8412" alt="imagen de un Notebook con un estetoscopio sobre el teclado" />
                    <div className="informacion_del_servicio">
                        <h2 className='titulo_del_servicio_h2'>Mantención</h2>
                        <p className='texto_del_servicio'>Nuestro servicio de mantenimiento está diseñado para asegurar que tus dispositivos tecnológicos funcionen de manera óptima y sin problemas. Nuestro equipo de expertos realiza inspecciones regulares, actualizaciones y ajustes precisos para mantener tus dispositivos en el mejor estado posible. Nos encargamos de todos los detalles para que tú puedas disfrutar de la tecnología sin preocupaciones. Con ZeroLag, tu inversión en tecnología estará protegida y lista para brindarte un rendimiento excepcional a largo plazo.</p>
                        <a className='btn_contactanos' href="#">CONTACTANOS</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

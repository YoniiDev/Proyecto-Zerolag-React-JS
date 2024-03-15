import '../sass/contacto.scss'
export const Contacto = () => {
    return (

        <section className='formulario_e_informacion_de_contacto'>

            <div className="formulario_de_contacto">
                <h1 className='titulo_formulario_de_contacto_h1'>Formulario De Contacto</h1>
                <div className="formulario_contenedor">
                    <form className='formulario' action="" method="" encType="">
                        <div className="nombre">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" />
                        </div>
                        <div className="apellido">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" name="apellido" id="apellido" />
                        </div>
                        <div className="correo">
                            <label htmlFor="correo">Correo</label>
                            <input type="email" name="correo" id="correo" />
                        </div>
                        <div className="contraseña">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" name="contraseña" id="contraseña" />
                        </div>
                        <div className="genero">
                            <label>Género</label>
                            <div>
                                <label>Masculino</label>
                                <input type="radio" name="genero" />
                                <label>Femenino</label>
                                <input type="radio" name="genero" />
                                <label>Otro</label>
                                <input type="radio" name="genero" />
                            </div>
                        </div>
                        <div className="pais">
                            <label htmlFor="pais">País</label>
                            <select name="pais" id="pais">
                                Pais
                                <option value="">Argentina</option>
                                <option value="">Bolivia</option>
                                <option value="">Brasil</option>
                                <option value="">Chile</option>
                                <option value="">Colombia</option>
                                <option value="">Costa Rica</option>
                                <option value="">Cuba</option>
                                <option value="">Ecuador</option>
                                <option value="">El Salvador</option>
                                <option value="">Guatemala</option>
                                <option value="">Haití</option>
                                <option value="">Honduras</option>
                                <option value="">México</option>
                                <option value="">Nicaragua</option>
                                <option value="">Panamá</option>
                                <option value="">Paraguay</option>
                                <option value="">Perú</option>
                                <option value="">Republica Dominicana</option>
                                <option value="">Uruguay</option>
                                <option value="">Venezuela</option>
                            </select>
                        </div>
                        <div className="motivo">
                            <label htmlFor="motivo">Motivo</label>
                            <select name="motivo" id="motivo">
                                Motivo
                                <option value="">Reparación</option>
                                <option value="">Mantención</option>
                                <option value="">Reclamo por atraso</option>
                                <option value="">Encomienda adulterada o producto golpeado</option>
                                <option value="">Produto con falla de fábrica</option>
                                <option value="">Deseo modificar o cancelar mi pedido</option>
                                <option value="">Quiero mi historial de compras</option>
                                <option value="">Solicitud boleta/factura</option>
                                <option value="">Sugerencia</option>
                                <option value="">Otro motivo</option>
                            </select>
                        </div>
                        <div className="mensaje">
                            <label>Mensaje</label>
                            <textarea name="mensaje" cols={30} rows={10} defaultValue={""} />
                        </div>
                        <div className="enviar_restablecer">
                            <input type="submit" />
                            <input type="reset" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="informacion_de_contacto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3550.143034438325!2d-109.43359121991945!3d-27.151789528375325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1692996287928!5m2!1ses-419!2scl" width={400} height={300} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                <div className="contacto_contenedor">
                    <h2 className='titulo_contacto_h2'>Contacto</h2>
                    <p className='medios_de_contacto'>Teléfono: +56 9 12345678 <br /> Correo:contacto@ZeroLag.com</p>
                    <h2 className='titulo_horario_de_atencion_h2'>Horario De Atención</h2>
                    <p className='informacion_de_horario_de_atencion'>Lunes a Viernes de 8:30 a 18:00hrs <br /> Sabado y Domingo de 9:00 a 14:00 hrs</p>
                </div>
            </div>

        </section>
    );
}


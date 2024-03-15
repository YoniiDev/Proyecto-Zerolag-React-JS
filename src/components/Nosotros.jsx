import '../sass/nosotros.scss'
export const Nosotros = () => {
    return (
        <section className='contenedor_nosotros'>
            <div className="quienes_somos">
                <h1 className='titulo_quienes_somos_h1'>¿Quiénes somos?</h1>
                <div className="quienes_somos_contenedor">

                    <p className='texto_quienes_somos'>Somos una comunidad de apasionados por la tecnología y su capacidad para transformar vidas. Comenzamos en 2022 como una pequeña tienda tecnologica y en la actualidad somos más que una tienda de productos tecnológicos; somos una comunidad de entusiastas que busca romper barreras y eliminar los retrasos en la experiencia digital.</p>

                    <img className='imagen_quienes_somos' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/QuienesSomosRedimensionada.jpg?alt=media&token=e665d3df-6468-477c-bc74-153afcc8e59c" alt="choque de puños entre 5 personas" />
                </div>
            </div>
            <div className="nuestra_mision">
                <h2 className='titulo_nuestra_mision_h2'>Nuestra Misión</h2>
                <div className="nuestra_mision_contenedor">

                    <p className='texto_nuestra_mision'>Nuestra misión es impulsar la innovación tecnológica sin restricciones. Creemos que la tecnología debe ser accesible para todos, sin importar su nivel de experiencia o presupuesto. Estamos comprometidos a brindar soluciones tecnológicas de alta calidad que aceleren tu vida digital y te permitan explorar todo lo que el mundo digital tiene para ofrecer.</p>

                    <img className='imagen_nuestra_mision' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/misionredimensionada.jpg?alt=media&token=770e01ab-b00f-4ade-947b-2e9a0a98a1ef" alt="abuelos con sus dos nietos felices y abrazados mirando una tablet" />
                </div>
            </div>
            <div className="lo_que_nos_diferencia">
                <h2 className='titulo_lo_que_nos_diferencia_h2'>Lo Que Nos Diferencia</h2>
                <div className="lo_que_nos_diferencia_contenedor">

                    <p className='texto_lo_que_nos_diferencia'>Lo que nos distingue es nuestra pasión por la excelencia. No nos conformamos con lo común; aspiramos a la perfección en cada detalle. Cada producto que ofrecemos, cada servicio que brindamos, está diseñado para superar tus expectativas y eliminar cualquier obstáculo en tu experiencia tecnológica.</p>

                    <img className='imagen_lo_que_nos_diferencia'
                        src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/loquenosdiferenciaredimensionada.jpg?alt=media&token=1b69233e-c6b0-4228-b816-2086f046da7a" alt="imagen de perfil de la cabeza de un robot humanoide con rasgos femeninos" />
                </div>
            </div>
            <div className="nuestros_valores">
                <h2 className='titulo_nuestros_valores_h2'>Nuestros Valores</h2>
                <div className="nuestros_valores_contenedor">
                    <div className='tarjeta_de_valores'>
                        <img className='imagen_de_tarjeta_de_valores' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/Tu_Socio_Tecnologico_Redimensionada.jpg?alt=media&token=a0b04d32-ef9e-41c0-9eee-f1b3ffd36e41" alt="imagen que muestra un apreton de manos, con un estilo tecnologico" />
                        <div className='informacion_de_tarjeta_de_valores'>
                            <h3 className='titulo_h3_de_tarjeta_de_valores'>Tu Socio Tecnológico</h3>
                            <p className='texto_de_tarjeta_de_valores'>En ZeroLag, no solo vendemos productos, construimos relaciones. Nos convertimos en tu socio tecnológico, ofreciéndote asesoramiento y soluciones adaptadas a tus necesidades específicas. Tu éxito en el mundo digital es nuestra prioridad.</p>
                        </div>

                    </div>
                    <div className='tarjeta_de_valores'>
                        <img className='imagen_de_tarjeta_de_valores' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/compromiso_con_la_satisfaccion_al_cliente_redimensionada.jpg?alt=media&token=e44a6339-f836-4ce4-927b-6f7bc117a25c" alt="joven feliz sentado frente al escritorio jugando en su pc gamer" />
                        <div className="informacion_de_tarjeta_de_valores">
                            <h3 className='titulo_h3_de_tarjeta_de_valores'>Satisfacción del Cliente</h3>
                            <p className='texto_de_tarjeta_de_valores'>El cliente es nuestra principal prioridad en ZeroLag. Nos esforzamos por comprender tus necesidades y expectativas individuales. Estamos comprometidos a brindar un servicio excepcional y a garantizar que cada cliente esté satisfecho con su experiencia en ZeroLag. Tu satisfacción es nuestra mayor recompensa.</p>
                        </div>
                    </div>
                    <div className='tarjeta_de_valores'>
                        <img className='imagen_de_tarjeta_de_valores' src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/Accesibilidad_Tecnologica_Redimensionada.jpg?alt=media&token=6723e4e6-58d5-4810-ab76-be97f07e9ad3" alt="padres felices con sus hijos frente a un notebook" />
                        <div className="informacion_de_tarjeta_de_valores">
                            <h3 className='titulo_h3_de_tarjeta_de_valores'>Accesibilidad Tecnológica</h3>
                            <p className='texto_de_tarjeta_de_valores'>Nos enorgullece hacer que la tecnología sea accesible para todos. Creemos que la tecnología debe estar al alcance de cualquier persona, sin importar su nivel de experiencia o presupuesto. Trabajamos incansablemente para ofrecer una amplia gama de productos y servicios tecnológicos de calidad que permitan a todos aprovechar al máximo el mundo digital y superar cualquier barrera tecnológica.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="revolución_digital">
                <h2 className='titulo_revolucion_digital_h2'>Únete a la Revolución Tecnológica. En ZeroLag, estamos impulsando la revolución digital y queremos que seas parte de ello.</h2>
            </div>
        </section>
    );
}


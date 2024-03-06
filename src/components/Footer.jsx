import '../sass/footer.scss'
export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_contenedor">
                <div className="footer_zerolag">
                    <h2>ZeroLag</h2>
                    <p>Redifiniendo la velocidad y la eficiencia</p>
                </div>
                <div className="medios_de_pago">
                    <h3>Medios de pago</h3>
                    <div className="imagenes_medios_de_pago">
                        <img className="logo_webpay" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/webpaylogo.png?alt=media&token=633c4b2c-0e86-49ad-9d16-ce72d210f99a" alt="webpay logo" />
                        <img className="logo_mercado_libre" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/mercadopagologo.png?alt=media&token=b5031810-3c79-4f00-b8f9-27b82726eef5" alt="mercado pago logo" />
                        <img className="logo_santander" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/santanderlogo.png?alt=media&token=bb661e36-ac81-4b4d-b0e0-88e0306a118d" alt="santander logo" />
                        <img className="logo_bancoestado" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/bancoestadologo.png?alt=media&token=20b39925-97dd-40b4-b49b-d9091ce28677" alt="bancoestado logo" />
                        <img className="logo_fpay" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/fpaylogo.png?alt=media&token=e3229533-96ec-4f07-870a-bcad1a409087" alt="fpay logo" />
                        <img className="logo_transferencia_bancaria" src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/trasferencia_bancaria.png?alt=media&token=d2c75ae2-57cb-4ba2-9687-f1d41204f628" alt="trasferencia bancaria logo" />
                    </div>
                </div>
                <div className="redes_sociales">
                    <h3>Siguenos en:</h3>
                    <a href="https://www.facebook.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/facebook.png?alt=media&token=8fdf0ac0-787a-459a-a3f3-070493b82816" alt="logo de facebook" /></a>
                    <a href="https://twitter.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/xlogo.png?alt=media&token=2aec75fa-bc9c-4dd4-b968-13a02aca468f" alt="logo de X" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/instagram.png?alt=media&token=26157a67-c5c4-4907-b650-a12449309886" alt="logo de instagram" /></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/react-2024-f0e3d.appspot.com/o/whatsapp.png?alt=media&token=59b3e4f4-def7-4403-ba95-8bedd477f010" alt="logo de whatsapp" /></a>
                </div>
            </div>
            <div className="derechos_de_autor">
                <p>&copy; 2024 | ZeroLag Todos los derechos reservados | Desarrollado con 💖 y mucho esfuerzo por YoniDev
                </p>
            </div>
        </footer>
    );
}


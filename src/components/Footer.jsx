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
                        <img className="logo_webpay" src="../img/webpaylogo.png" alt="webpay logo" />
                        <img className="logo_mercado_libre" src="../img/mercadopagologo.png" alt="mercado pago logo" />
                        <img className="logo_santander" src="../img/santanderlogo.png" alt="santander logo" />
                        <img className="logo_bancoestado" src="../img/bancoestadologo.png" alt="bancoestado logo" />
                        <img className="logo_fpay" src="../img/fpaylogo.png" alt="fpay logo" />
                        <img className="logo_transferencia_bancaria" src="../img/trasferencia_bancaria.png" alt="trasferencia bancaria logo" />
                    </div>
                </div>
                <div className="redes_sociales">
                    <h3>Siguenos en:</h3>
                    <a href="https://www.facebook.com/" target="_blank"><img src="../img/facebook.png" alt="logo de facebook" /></a>
                    <a href="https://twitter.com/" target="_blank"><img src="../img/xlogo.png" alt="logo de X" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="../img/instagram.png" alt="logo de instagram" /></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><img src="../img/whatsapp.png" alt="logo de whatsapp" /></a>
                </div>
            </div>
            <div className="derechos_de_autor">
                <p>&copy; 2023 | ZeroLag Todos los derechos reservados | Desarrollado con 💖 y mucho esfuerzo por YoniDev
                </p>
            </div>
        </footer>
    );
}


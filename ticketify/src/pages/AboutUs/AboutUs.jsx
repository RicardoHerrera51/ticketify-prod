import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function AboutUs() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>

                    <p className="mb-6">
                        En nuestra página, nos apasiona conectar a los amantes de la música, el deporte, el teatro y los eventos
                        en vivo con las experiencias que más les emocionan. Somos una plataforma en línea que ofrece una amplia
                        selección de boletos para conciertos, eventos deportivos, obras de teatro y muchos otros eventos
                        emocionantes en todo el país.
                    </p>

                    <p className="mb-6">
                        Nuestro objetivo es hacer que la compra de boletos sea fácil, segura y conveniente para nuestros clientes.
                        Trabajamos en estrecha colaboración con organizadores de eventos y proveedores confiables para ofrecer una
                        amplia gama de opciones y garantizar la autenticidad de los boletos que se venden en nuestra plataforma.
                    </p>

                    <p className="mb-6">
                        En nuestra página, valoramos la satisfacción del cliente y nos esforzamos por brindar un excelente servicio
                        en todo momento. Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier pregunta,
                        inquietud o asistencia que necesites antes, durante y después de tu compra de boletos.
                    </p>

                    <p>
                        Gracias por confiar en nosotros como tu plataforma de boletos en línea. Esperamos que disfrutes de los
                        increíbles eventos a los que asistas y que puedas crear recuerdos inolvidables.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs

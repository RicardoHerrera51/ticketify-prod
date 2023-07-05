import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Help() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Ayuda</h2>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Cómo funciona nuestra página?</h3>
                        <p>
                            Nuestra página es una plataforma en línea donde puedes encontrar y comprar boletos para una amplia variedad de
                            eventos, incluyendo conciertos, eventos deportivos, obras de teatro, festivales y más. Simplemente navega por
                            nuestra selección de eventos, elige el que te interese y sigue las instrucciones para comprar tus boletos.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Cómo puedo encontrar eventos específicos?</h3>
                        <p>
                            Para encontrar eventos específicos, puedes utilizar la barra de búsqueda en la parte superior de nuestra página.
                            Ingresa el nombre del artista, equipo deportivo, título de la obra de teatro u otro criterio relevante y se te
                            mostrarán los eventos relacionados. También puedes filtrar los eventos por categoría, ubicación, fecha y más para
                            refinar tu búsqueda.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Cómo puedo recibir mis boletos?</h3>
                        <p>
                            Una vez que completes tu compra, recibirás tus boletos por correo electrónico. Asegúrate de proporcionar una
                            dirección de correo electrónico válida durante el proceso de compra. También puedes acceder a tus boletos en
                            cualquier momento iniciando sesión en tu cuenta en nuestra página y visitando la sección "Mis boletos".
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Puedo vender mis boletos a través de su plataforma?</h3>
                        <p>
                            Actualmente, no ofrecemos la opción de vender boletos a través de nuestra plataforma. Nos enfocamos en brindar
                            una experiencia de compra segura y confiable para nuestros clientes. Sin embargo, siempre puedes consultar con el
                            organizador del evento o utilizar otros servicios dedicados a la reventa de boletos si deseas vender tus boletos.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-2">¿Dónde puedo obtener más ayuda o soporte?</h3>
                        <p>
                            Si tienes alguna pregunta, inquietud o necesitas asistencia adicional, puedes visitar nuestra página de contacto
                            donde encontrarás opciones para comunicarte con nuestro equipo de atención al cliente. Estaremos encantados de
                            ayudarte en lo que necesites y responder a tus preguntas.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Help

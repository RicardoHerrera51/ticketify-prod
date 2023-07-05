import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function FAQ() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Cómo puedo comprar boletos?</h3>
                        <p>
                            Para comprar boletos, simplemente selecciona el evento que te interesa en nuestra página, elige la cantidad de
                            boletos que deseas y haz clic en el botón de compra. Luego, sigue las instrucciones para completar el proceso de
                            pago y recibirás tus boletos por correo electrónico.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Cuáles son los métodos de pago aceptados?</h3>
                        <p>
                            Aceptamos diversos métodos de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias y pagos a
                            través de plataformas de pago en línea. Durante el proceso de compra, se te mostrarán las opciones disponibles
                            para realizar el pago.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Puedo cancelar o cambiar mi compra de boletos?</h3>
                        <p>
                            Las políticas de cancelación y cambio de boletos pueden variar según el evento y el organizador. Te recomendamos
                            revisar las políticas específicas de cada evento antes de realizar tu compra. En caso de que necesites realizar
                            cambios o cancelar tu compra, comunícate con nuestro servicio de atención al cliente para obtener asistencia.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">¿Qué sucede si el evento se cancela o se pospone?</h3>
                        <p>
                            En caso de que un evento se cancele o se posponga, haremos nuestro mejor esfuerzo para informarte sobre las opciones
                            disponibles para el reembolso o la reprogramación de los boletos adquiridos. Sin embargo, ten en cuenta que estaremos
                            sujetos a las políticas del organizador y no podemos garantizar el reembolso en todos los casos.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-2">¿Cómo puedo contactar al servicio de atención al cliente?</h3>
                        <p>
                            Si tienes alguna pregunta, inquietud o necesitas asistencia adicional, puedes comunicarte con nuestro servicio de
                            atención al cliente a través de nuestro formulario de contacto en la página o llamando a nuestro número de atención
                            al cliente. Estaremos encantados de ayudarte en lo que necesites.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ

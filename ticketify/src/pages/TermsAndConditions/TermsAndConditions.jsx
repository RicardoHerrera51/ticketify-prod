import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-5">
                    <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
                    <p className='text-2xl mb-6 mt-4'>¡Bienvenido a nuestra plataforma de venta de boletos para conciertos, eventos deportivos, obras de teatro y mucho más! Antes de realizar una compra, te pedimos que leas detenidamente los siguientes términos y condiciones que rigen nuestra relación con los usuarios:</p>
                    <h3 className="text-lg font-bold mt-4">Compra de Boletos:</h3>
                    <ol className="list-decimal list-inside mb-4 pl-6">
                        <li className="mb-2">
                            Al realizar una compra de boletos a través de nuestra plataforma, aceptas que eres responsable de proporcionar
                            la información correcta y actualizada, incluyendo los datos de contacto y el método de pago.
                        </li>
                        <li className="mb-2">
                            La disponibilidad de boletos está sujeta a cambios y no podemos garantizar la disponibilidad de los mismos en
                            todo momento. Te recomendamos realizar tu compra con anticipación.
                        </li>
                        <li className="mb-2">
                            Los boletos adquiridos son válidos únicamente para el evento y la fecha especificada en el momento de la
                            compra. No se permitirán cambios ni reembolsos, a menos que se indique lo contrario en las políticas del
                            evento.
                        </li>
                        <li className="mb-2">
                            Nos reservamos el derecho de cancelar cualquier compra de boletos que consideremos fraudulenta o en violación
                            de nuestros términos y condiciones.
                        </li>
                    </ol>

                    <h3 className="text-lg font-bold mt-4">Precios y Pagos:</h3>
                    <ol className="list-decimal list-inside mb-4 pl-6">
                        <li className="mb-2">
                            Los precios de los boletos están sujetos a cambios y pueden variar según el evento, la ubicación y otros factores.
                        </li>
                        <li className="mb-2">
                            Todos los pagos realizados a través de nuestra plataforma se procesarán de manera segura. Aceptamos diferentes
                            métodos de pago, los cuales se indicarán durante el proceso de compra.
                        </li>
                        <li className="mb-2">
                            Al realizar una compra, aceptas que eres responsable de cualquier cargo adicional relacionado con tu método de
                            pago, como comisiones bancarias o cargos por transacciones internacionales.
                        </li>
                    </ol>

                    <h3 className="text-lg font-bold mt-4">Política de Devoluciones y Reembolsos:</h3>
                    <ol className="list-decimal list-inside mb-4 pl-6">
                        <li className="mb-2">
                            Las políticas de devoluciones y reembolsos pueden variar según el evento y el organizador. Te recomendamos revisar
                            las políticas específicas de cada evento antes de realizar tu compra.
                        </li>
                        <li className="mb-2">
                            En caso de que un evento sea cancelado o pospuesto, haremos nuestro mejor esfuerzo para informarte sobre las
                            opciones disponibles para el reembolso o la reprogramación de los boletos adquiridos. Sin embargo, no podemos
                            garantizar el reembolso en todos los casos y estaremos sujetos a las políticas del organizador.
                        </li>
                    </ol>

                    <h3 className="text-lg font-bold mt-4">Responsabilidad:</h3>
                    <ol className="list-decimal list-inside mb-4 pl-6">
                        <li className="mb-2">
                            Nos esforzamos por brindar información precisa y actualizada sobre los eventos y la disponibilidad de boletos.
                            Sin embargo, no podemos garantizar la exactitud completa de dicha información y no nos hacemos responsables de
                            cualquier error u omisión.
                        </li>
                        <li className="mb-2">
                            No nos hacemos responsables de cualquier pérdida, daño o lesión sufridos durante un evento al que asistas utilizando
                            los boletos adquiridos a través de nuestra plataforma. La responsabilidad recae en el organizador del evento.
                        </li>
                    </ol>

                    <h3 className="text-lg font-bold mt-4">Privacidad y Protección de Datos:</h3>
                    <ol className="list-decimal list-inside mb-4 pl-6">
                        <li className="mb-2">
                            Respetamos tu privacidad y nos comprometemos a proteger tus datos personales de acuerdo con nuestra Política de Privacidad.
                            Al utilizar nuestra plataforma, aceptas los términos de nuestra Política de Privacidad.
                        </li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions

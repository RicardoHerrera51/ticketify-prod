import React, { useState } from 'react'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        // Reiniciar el formulario
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-8 font-montserrat">

            <h2 className="text-4xl text-pure-indigo font-bold m-4">Contáctanos</h2>
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-lg p-6 border m-6 bg-white rounded-md shadow-md">

                        {submitted ? (
                            <p className="mb-4 text-green-600">
                                ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block font-semibold mb-1">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block font-semibold mb-1">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block font-semibold mb-1">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-pure-indigo-500 text-white bg-pure-indigo px-4 py-2 rounded-md hover:bg-pure-indigo-600 transition-colors"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs

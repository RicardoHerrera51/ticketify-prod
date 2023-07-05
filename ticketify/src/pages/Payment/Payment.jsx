import React, { useState } from 'react'
import Image1 from '../../assets/img/imagen2.png'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Tarjeta enviada');
    }
    return (
        <div className="font-montserrat">
            <Navbar />
            <div>
                <img src={Image1} alt="Imagen" className="h-60 w-full" />
            </div>

            <div className="flex justify-center">
                <form className="p-6 m-8 border rounded-lg shadow-md font-montserrat" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Número de tarjeta</label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo focus:border-indigo"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            maxLength={16}
                            placeholder="Ingrese el número de tarjeta"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardName" className="block text-gray-700 font-medium mb-2">Nombre en la tarjeta</label>
                        <input
                            type="text"
                            id="cardName"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo focus:border-indigo"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="Ingrese el nombre en la tarjeta"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="expirationDate" className="block text-gray-700 font-medium mb-2">Fecha de vencimiento</label>
                            <input
                                type="date"
                                id="expirationDate"
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo focus:border-indigo"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                                maxLength={5}
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-indigo focus:border-indigo"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                maxLength={3}
                                placeholder="Ingrese el CVV"
                                required
                            />
                        </div>
                    </div>

                    <a href={'/mytickets'} >
                    <div className="flex justify-center">
                        <button type="submit" className="bg-pure-indigo text-white py-2 px-4 rounded-md">
                            Realizar pago
                        </button>
                    </div>
                    </a>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Payment
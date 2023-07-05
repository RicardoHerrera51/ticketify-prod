import React from 'react'
import Image1 from '../../assets/img/imagen2.png'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import iconCalendar from '../../assets/img/iconCalendar.png'
import iconClock from '../../assets/img/iconClock.png'
import iconCart from '../../assets/img/iconCart.png'
import arrowBack from '../../assets/img/arrowBack.png'
import { createTicketOrder } from '../../services/UserService'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function CartOrder() {
    const { quantity, tier } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        if (!order) {
            async function fetchOrder() {
                let response = await createTicketOrder(quantity, tier);
                if (response.success) {
                    setOrder(response);
                }
                console.log(response)
            }
        fetchOrder();
        }
    }), [setOrder];

    return (
        <div className="font-montserrat">
            <Navbar />
            <a href={'/preorder'}>
            <div>
                <img src={Image1} alt="Imagen" className="object-fill h-60 w-full" />
            </div>

            <div className="flex items-center m-4">
                <img src={arrowBack} alt="Google" className="h-4 w-2 inline-block" />
                <p className="text-pure-indigo text-l font-extralight m-2">Atras</p>
            </div>
            </a>

            <p className="text-pure-indigo text-3xl font-extrabold m-4">{order?.result?.eventName}</p>

            <div className="flex flex-wrap m-2">
                <div className="p-2">
                    <div className="bg-pure-indigo rounded-full py-2 px-4 flex items-center">
                        <img src={iconCalendar} alt="Google" className="h-4 w-4 inline-block" />
                        <p className="text-white font-normal inline-block ml-2">ABR 15, 2022</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="bg-pure-indigo rounded-full py-2 px-4 flex items-center">
                        <img src={iconClock} alt="Google" className="h-4 w-4 inline-block" />
                        <p className="text-white font-normal inline-block ml-2">7:00 PM</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="border shadow-md p-4 rounded-lg">
                    <h2 className="text-2xl text-center font-normal mb-4">Orden de pago</h2>

                    <p className="font-normal text-center m-2">{order?.result?.eventName}</p>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold py-2 px-4">Location</p>
                            <p className="font-semibold py-2 px-4">Total Tickets</p>
                        </div>

                        <div>
                            <p className="font-normal py-2 px-4">{order?.result?.tier}</p>
                            <p className="font-normal py-2 px-4">{order?.result?.totalTickets}</p>
                        </div>

                    </div>

                    <hr className='h-0.5 bg-white' />

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p className="font-semibold py-2 px-4">Subtotal</p>
                            <p className="font-semibold py-2 px-4">Impuestos</p>
                            <p className="text-lg font-bold py-2 px-4">Total</p>
                        </div>

                        <div>
                            <p className="font-normal py-2 px-4">${order?.result?.subtotal}</p>
                            <p className="font-normal py-2 px-4">${order?.result?.taxes}</p>
                            <p className="font-normal text-lg py-2 px-4">${order?.result?.total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end m-4">
                <a href={"/"}>
                    <button className="bg-pure-indigo text-white font-normal rounded-lg py-2 px-4 flex items-center">
                        <img src={iconCart} alt="Google" className="h-4 w-4 inline-block" />
                        <span className="ml-2 font-normal">Pagar</span>
                    </button>
                </a>
            </div>

            <Footer />
        </div>
    )
}


export default CartOrder
import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Carousel from '../../components/Carousel/Carousel'
import Slider from '../../components/Carousel/Slider'
import { useEffect, useState } from 'react';
import { getEvents } from '../../services/UserService'

function Home() {

    const [images, setImages] = useState([]);

    useEffect(() => {   
        if (images.length == 0) {
            async function fetchAllEvents() {
                let response = await getEvents();
                if (response.success) {
                    setImages(response.items);
                }
            }
            fetchAllEvents();
        }
    }), [setImages];

    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3"></div>
                <div className="w-full">
                    <div className="text-center font-monserat font-light text-3xl m-14">
                        <p className='mb-2'>
                            Aquí podrás encontrar las entradas para los mejores conciertos, festivales, deportes y eventos en vivo de todo
                            el país.
                        </p>
                        <p className='mb-4'>
                            No pierdas la oportunidad de vivir una experiencia única.
                        </p>
                        <p className='mb-4'>
                            Compra tus entradas ahora y prepárate para disfrutar de los eventos más emocionantes del año.
                        </p>
                        <p className='mb-4'>
                            ¡Únete a la diversión en vivo con nosotros!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3"></div>
            </div>

            <hr className="bg-silver m-2" />

            <div>
                <a href={'/events'}>
                    <p className='text-5xl ml-4 mt-6 text-pure-indigo font-montserrat font-extrabold'>Próximos eventos </p>
                </a>
            </div>

            <Slider images={images}/>
            <Footer />
        </div>
    )
}

export default Home

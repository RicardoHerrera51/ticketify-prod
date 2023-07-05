import React, { useState, useEffect } from 'react'
import Image1 from '../../assets/img/imagen2.png'
import Image2 from '../../assets/img/imageCarousel.png'
import Image3 from '../../assets/img/imageCarousel2.png'

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3];
  const texts = [
    "¡Bienvenido a nuestra página web de venta de tickets para eventos!",
    "Encontraras los eventos del momento",
    "Registrate ya"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-96 object-fill" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full mx-1 ${i === currentImage ? 'bg-white' : 'bg-silver'}`}
                  ></div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-5xl sm:text-2xl md:text-3xl font-monserat font-extrabold">
                {texts[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

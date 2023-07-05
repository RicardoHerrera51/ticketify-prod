import { useState, useEffect } from 'react'
import QRCode from 'react-qr-code'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { saveTicketQr } from '../../services/UserService'
import { useParams } from "react-router-dom";
import moment from 'moment'

function QrTicket() {
    const { ticket } = useParams();
    const [qrData, setQRData] = useState('')
    const [qr, setQr] = useState();
    const [data, setData] = useState('');
    useEffect(() => {
        if (!qr) {
            async function fetchQr() {
                let response = await saveTicketQr(ticket);
                if (response.success) {
                    setQr(response.result);
                }
                setData(response.result)
            }
        fetchQr();
        }
    }), [setQr, setData];

    useEffect(() => {
        const qrCodeData = data.qr
        console.log(data.qr)
        setQRData(qrCodeData)
    }, [setQRData, data])

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center font-montserrat">
                {qrData && (
                    <div className="flex flex-col items-center m-4">
                        <p className="text-center text-pure-indigo text-lg mb-2 font-semibold">Codigo Qr generado </p>
                        <p className="text-center text-2xl mb-2 font-semibold">{qr?.eventName}</p>
                        <p className='text-base'>{qr?.eventPlace} / {moment(qr?.creationDate).format('HH:mm A')}</p>
                        <p className='font-semibold m-2 text-2xl' >{qr?.tierName}</p>
                        <p className='font-semibold m-2 text-xl' >{qr?.qr}</p>
                        <div className="flex justify-center m-6">
                            <QRCode value={qr?.qr} />
                        </div>
                    </div>
                )}
            </div>
            <div className='m-4'>
                <p className='text-base font-light text-silver'>Este ticket es válido para el ingreso de UNA (1) persona para la localidad, fecha, hora y persona indicada por el mismo.</p>
                <p className='text-base font-light text-silver'>El día del evento necesitas unicamente presentar tu código Qr para poder ingresar.</p>
                <p className='text-normal font-light text-silver'>Nos revervamos los derechos de adminisón.</p>
            </div>
            <Footer />
        </div>
    )
}

export default QrTicket
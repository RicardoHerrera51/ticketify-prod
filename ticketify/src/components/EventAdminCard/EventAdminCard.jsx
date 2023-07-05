import photo from '../../assets/img/event1.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditButton from '../EditButton/EditButton'
import moment from 'moment'
import { allEventServices } from '../../services/EventServices';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import EventsForm from '../EventsForm/EventsForm';

const URLImageRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
const DEFAULT_IMG = "https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg"

const EventAdminCard = ({ events = [] }) => {

    const [categories, setCategories] = useState([])
    const [image, setImage] = useState('')

    moment.locale();

    async function changeEventStatus(title) {
        try {
            const response = await allEventServices.changeStatus(title);
            if (!response.success) {
                toast("Algo salió mal.", { type: 'error' })
                throw new Error('Something was wrong')
            }

            toast("Estado cambiado", { type: 'success' })
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center">
            {events.map((event) => {
                return (
                    <div key={event.id} className='min-w-full max-w-xl px-8 py-4'>
                        <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl md:flex-row min-w-full md:max-w-full max-h-full md:h-80 md:max-h-80 font-montserrat'>
                            <img className='object-cover w-full rounded-t-lg h-72 md:h-80 md:w-48 md:rounded-none md:rounded-l-lg' src={event.image ? event.image : DEFAULT_IMG} alt={event.title} />
                            <div className='flex flex-col justify-between p-4 leading-normal text-sm md:text-base w-max'>
                                <p className='mb-1 font-medium text-dark-violet break-words'><b> {event.title} </b></p>
                                <p className='mb-1 font-medium text-dark-violet break-words'><b>Fecha y hora </b> {moment(event.date).format('DD/MM/YYYY')} - {moment(event.hour).format("hh:mm A")} </p>
                                <p className='mb-1 font-medium text-dark-violet break-words'><b>Categoria </b> {event.category?.category} </p>
                                <p className='font-bold text-dark-violet break-words'>Lugar</p>
                                <p className='mb-1 font-medium text-dark-violet break-words'> {event.place} </p>
                                <p className='font-medium text-dark-violet break-words'><b>Dirección </b></p>
                                <p className='mb-1 font-medium text-dark-violet break-words'> {event.address} </p>
                                <p className='mb-2 font-medium text-dark-violet break-words'><b>Estado </b>
                                    {event.status ? <span className='text-pure-green ml-2'><CheckCircleIcon /> Activo </span>
                                        : <span className='text-danger-red ml-2'><CancelIcon /> Inactivo </span>}
                                </p>
                                <div className='space-y-2 space-x-2 text-right'>
                                    <button
                                        onClick={() => changeEventStatus(event.id)}
                                        className='rounded-lg bg-orange-600 hover:bg-orange-500 w-32 h-10 max-h-fit p-2 text-white md:text-sm my-auto font-montserrat'
                                        type='submit'>
                                        {event.status ? <span> <VisibilityOffIcon /> Inactivar </span>
                                            : <span> <VisibilityIcon /> Activar </span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EventAdminCard
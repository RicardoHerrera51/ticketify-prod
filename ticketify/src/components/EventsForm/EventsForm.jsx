import { FileInput, Label, Select } from "flowbite-react"
import Datepicker from "react-tailwindcss-datepicker"
import { useState } from "react";
import SaveButton from "../SaveButton/SaveButton";
import { allEventServices } from "../../services/EventServices";
import moment from "moment";
import { allCategoryServices } from "../../services/CategoryServices";
import { ToastContainer, toast } from "react-toastify";
import CloudinaryUploadWidget, { IMAGE_URL } from "../CloudinaryUploadWidget/CloudinaryUploadWidget";

const URLImageRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
const DEFAULT_IMG = "https://psicotecnicoelzahor.es/wp-content/uploads/2016/05/ef3-placeholder-image.jpg"

const EventsForm = ({ events = [], categories = [] }) => {

    moment.locale();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [place, setPlace] = useState('')
    const [address, setAddress] = useState('')
    const [category, setCategory] = useState('')
    const [eventCategory, setEventCategory] = useState('')

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
        setDate(moment(newValue.startDate).format('DD/MM/YYYY'))
    }

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function getCategoryId(name) {
        if (typeof (name) === undefined || name !== '') {
            const categoryResponse = await allCategoryServices.getCategoryByName(name)
            setCategory(categoryResponse.data.id)
            setEventCategory(categoryResponse.data.category)
            return categoryResponse.data.id
        } else {
            toast("Seleccione una categoría válida", { type: "warning" })
        }
    }

    const onIndexChange = (e, save) => {
        getCategoryId(e.target.value)
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        createEvent()
    }

    async function createEvent() {
        try {
            setImage(IMAGE_URL !== '' ? IMAGE_URL : DEFAULT_IMG)
            if (title != '' && date != '' && hour != '' && place != '' && address != '' && category != '' && image != '') {
                getCategoryId(eventCategory)
                const response = await allEventServices.createEvent(title, IMAGE_URL, date, hour.toString(), place, address, category)

                if (!response.success) {
                    toast("Algo salió mal!!! Intentelo en otro momento", { type: "error" })
                    throw new Error("Algo salió mal !!! :/")
                }

                toast('Evento creado correctamente', { type: 'success' })
                setTitle('')
                setImage('')
                setDate('')
                setHour('')
                setPlace('')
                setAddress('')
                setEventCategory('')
                window.location.href("../event-admin")
                window.location.reload()

            } else if (title != '' && date != '' && hour != '' && place != '' && address != '' && category != '' && image == '') {
                toast("Seleccione una imagen, por favor", { type: "warning" })
            } else {
                toast("Campos vacíos, favor completar formulario", { type: "warning" })
            }

        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form action="post" className="font-montserrat font-medium" onSubmit={onSubmit}>
                <div className="p-4">
                    <label htmlFor="eventName" className="block mb-2 text-base text-dark-violet">Evento</label>
                    <input type="text" id="title" onChange={(e) => onChange(e, setTitle)} value={title} autoComplete="off" placeholder="Nombre del evento" className="block w-full mb-4 p-2 text-dark-violet border border-dark-violet hover:border-violet-700 rounded-lg shadow-md text-base focus:ring-blue-500 focus:border-blue-500" />

                    <div className="grid grid-flow-cols grid-cols-1 md:grid-cols-2">
                        <div className="mb-4 md:pr-2">
                            <label htmlFor="date" className="block mb-2 text-base text-dark-violet">Fecha</label>
                            <div id="date" className="relative w-full">
                                <Datepicker
                                    containerClassName="border border-dark-violet rounded-lg hover:border-violet-700"
                                    inputClassName="font-medium border border-white rounded-lg w-full shadow-md"
                                    primaryColor={"indigo"}
                                    asSingle={true}
                                    useRange={false}
                                    value={value}
                                    displayFormat="DD/MM/YYYY"
                                    onChange={handleValueChange}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="eventTime" className="block mb-2 text-base text-dark-violet">Hora</label>
                            <div className="relative w-full">
                                <input datepicker="true" datepicker-autohide="true" type="time" id="hour" onChange={(e) => onChange(e, setHour)} value={hour} className="border border-dark-violet text-gray-900 text-base rounded-lg shadow-md hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Seleccione una hora" />
                            </div>
                        </div>
                    </div>

                    <label htmlFor="eventCategory" className="block mb-2 text-base text-dark-violet">Categoría</label>
                    <Select id="eventCategory"
                        onChange={(e) => onIndexChange(e, setEventCategory)}
                        value={eventCategory}
                        className="relative w-full mb-4 border border-dark-violet rounded-lg shadow-md text-dark-violet font-medium bg-white hover:border-violet-700 focus:ring-dark-violet focus:border-dark-violet">
                        <option > </option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id}> {category.category} </option>
                            )
                        })}
                    </Select>

                    <label htmlFor="place" className="block mb-2 text-base text-dark-violet">Lugar</label>
                    <input type="text" id="place" onChange={(e) => onChange(e, setPlace)} value={place} autoComplete="off" placeholder="Lugar del evento" className="block w-full mb-4 p-2 text-dark-violet border border-dark-violet rounded-lg shadow-md text-base hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500" />

                    <label htmlFor="address" className="block mb-2 text-base text-dark-violet">Dirección</label>
                    <textarea type="text" id="address" onChange={(e) => onChange(e, setAddress)} value={address} autoComplete="off" placeholder="Dirección del evento" className="block w-full mb-4 p-2.5 text-dark-violet  border border-dark-violet rounded-lg shadow-md text-base hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500 resize-none" />

                    <div className="w-full" id="fileUpload">
                        <label htmlFor="image" className="block mb-2 text-base text-dark-violet">Imagen</label>
                        <CloudinaryUploadWidget className="bg-pure-indigo" />
                    </div>

                    <div className="flex justify-end mt-4">
                        <SaveButton />
                    </div>
                </div>
            </form>
        </>
    )
}

export default EventsForm
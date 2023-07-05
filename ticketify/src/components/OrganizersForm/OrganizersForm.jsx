import { useState } from "react";
import SaveButton from "../SaveButton/SaveButton"
import { Select } from "flowbite-react";
import { allEventServices } from "../../services/EventServices";
import { allInvolvedServices } from "../../services/InvolvedServices";
import { toast } from "react-toastify";

const OrganizersForm = ({ events = [] }) => {

    const [eventId, setEventId] = useState('')
    const [event, setEvent] = useState('')
    const [identifier, setIdentifier] = useState('')
    const [organizer, setOrganizer] = useState('')

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function getEventId(name) {
        if (typeof (name) === undefined || name !== '') {
            const response = await allEventServices.getEventByTitle(name)
            console.log(response)
            setEventId(response.data[0].id)
            setEvent(response.data[0].title)
            return response.data.id
        } else {
            toast("Seleccione un evento válido", { type: "warning" })
        }
    }

    const onIndexChange = (e, save) => {
        console.log(e.target.value)
        getEventId(e.target.value)
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        createOrganizer()
    }

    async function createOrganizer() {
        try {
            if (identifier == '' || organizer == '' || event == '') {
                toast("Campos vacíos. Por favor llenarlos completamente.", { type: 'warning' })
            } else {
                const response = await allInvolvedServices.createInvolved(identifier, organizer, eventId)

                if (!response.success) {
                    toast("Algo salió mal. Intente nuevamente.", { type: 'error' })
                    throw new Error("Algo salió mal !!! :/")
                }

                toast('Organizador guardado correctamente', { type: 'success' });
                setIdentifier('')
                setOrganizer('')
                window.location.href = '../organizers'
            }
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <form action="post" className="font-montserrat font-medium" onSubmit={onSubmit}>
            <div className="p-4">
                <label htmlFor="organizerId" className="block mb-2 text-base text-dark-violet">Identificador</label>
                <input type="text" id="organizerName" onChange={(e) => onChange(e, setIdentifier)} autoComplete="off" placeholder="Identificador del organizador" className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                <label htmlFor="organizerName" className="block mb-2 text-base text-dark-violet">Organizador</label>
                <input type="text" id="organizerName" onChange={(e) => onChange(e, setOrganizer)} autoComplete="off" placeholder="Nombre del organizador" className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                <label htmlFor="eventOrganizer" className="block mb-2 text-base text-dark-violet">Evento</label>
                <Select
                    id="eventOrganizer"
                    onChange={(e) => onIndexChange(e, setEvent)}
                    value={event}
                    className="relative w-full mb-4 border border-dark-violet rounded-lg text-dark-violet font-medium bg-white focus:bg-dark-violet focus:border-dark-violet hover:border-violet-700"
                >
                    <option>  </option>
                    {events.map((event) => {
                        return (
                            <option key={event.id}> {event.title} </option>
                        )
                    })}
                </Select>
                <div className="flex justify-end mt-4">
                    <SaveButton />
                </div>
            </div>
        </form>
    )
}

export default OrganizersForm
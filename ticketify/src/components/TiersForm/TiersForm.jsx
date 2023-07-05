import { Select } from "flowbite-react"
import SaveButton from "../SaveButton/SaveButton"
import { useState } from "react"
import { toast } from "react-toastify"
import { allTierServices } from "../../services/TierServices"
import { allEventServices } from "../../services/EventServices"

const TiersForm = ({ events = [] }) => {

    const [tier, setTier] = useState('')
    const [price, setPrice] = useState(0)
    const [capacity, setCapacity] = useState(0)
    const [event, setEvent] = useState('')
    const [eventId, setEventId] = useState('')

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function getEventId(name) {
        if (typeof (name) === undefined || name !== '') {
            const tierResponse = await allEventServices.getEventByTitle(name)
            setEventId(tierResponse.data[0].id)
            setEvent(tierResponse.data[0].title)
            return tierResponse.data.id
        } else {
            toast("Seleccione un evento válido", { type: "warning" })
        }
    }

    const onIndexChange = (e, save) => {
        getEventId(e.target.value)
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        createEvent()
    }

    async function createEvent() {
        try {
            if (tier == '' || price == '' || capacity == '' || event == '') {
                toast("Campos vacíos, por favor completarlos", { type: "warning"})
            } else {
                getEventId(event)
                const response = await allTierServices.createTier(tier, price, capacity, eventId)
    
                if (!response.success) {
                    toast("Algo salió mal!!! Intentelo en otro momento", { type: "error" })
                    throw new Error("Algo salió mal !!! :/")
                }
    
                toast('Localidad creada correctamente', { type: 'success' })
                setTier('')
                setPrice(0)
                setCapacity(0)
                setEvent('')
                setEventId('')
                window.location.reload()

            }

        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <form action="post" onSubmit={onSubmit} className="font-montserrat font-medium">
            <div className="p-4">
                <label htmlFor="tierName" className="block mb-2 text-base text-dark-violet">Nombre de la localidad</label>
                <input
                    type="text"
                    id="tierName"
                    onChange={(e) => onChange(e, setTier)}
                    value={tier}
                    autoComplete="off"
                    placeholder="Nombre de la localidad"
                    className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet rounded-lg text-base hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="grid grid-flow-cols grid-cols-1 md:grid-cols-2">
                    <div className="mb-2 md:pr-2">
                        <label htmlFor="tierPrice" className="block mb-2 text-base text-dark-violet">Precio ($)</label>
                        <input
                            type="number"
                            step="0.1"
                            id="tierPrice"
                            onChange={(e) => onChange(e, setPrice)}
                            value={price}
                            placeholder="Precio"
                            className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet rounded-lg text-base hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tierCapacity" className="block mb-2 text-base text-dark-violet">Capacidad</label>
                        <input
                            type="number"
                            id="tierCapacity"
                            onChange={(e) => onChange(e, setCapacity)}
                            value={capacity}
                            min="1"
                            placeholder="Capacidad"
                            className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet rounded-lg text-base hover:border-violet-700 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <label htmlFor="tierEvent" className="block mb-2 text-base text-dark-violet">Evento</label>
                <Select
                    id="tierEvent"
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
                <div className="flex justify-end mt-8">
                    <SaveButton />
                </div>
            </div>
        </form>
    )
}

export default TiersForm
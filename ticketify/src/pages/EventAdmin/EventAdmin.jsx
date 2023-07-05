import Footer from "../../components/Footer/Footer"
import EventAdminCard from "../../components/EventAdminCard/EventAdminCard"
import EventsForm from "../../components/EventsForm/EventsForm"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import { useEffect, useState } from "react"
import { allEventServices } from "../../services/EventServices"
import { allCategoryServices } from "../../services/CategoryServices"
import { ToastContainer, toast } from "react-toastify"
import { Select } from "flowbite-react"

const DEFAULT_IMG = "https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg"

const EventAdmin = () => {

    const [page, setPage] = useState(0);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [totalPages, setTotalPages] = useState(1)
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [searchEvent, setSearchedEvent] = useState('')
    const [category, setCategory] = useState('')
    const [eventCategory, setEventCategory] = useState('')

    useEffect(() => {
        let fetchEvents = async () => {
            try {
                const filters = { title: searchEvent, size: 10, page: page }
                const response = await allEventServices.getEvents(filters)

                setIsNextPageAvailable(response.isNextPageAvailable)
                setTotalPages(response.totalPages)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setEvents(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();

        const fetchCategories = async () => {
            try {
                const filters = { title: title, size: 10, page: page }
                let response = await allCategoryServices.getAllCategories(filters)

                setIsNextPageAvailable(response.isNextPageAvailable)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setCategories(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, [page, recharge]);

    const next = () => {
        if (isNextPageAvailable) {
            window.scrollTo(0, 0);
            setPage(page + 1);
        }
    }

    const prev = () => {
        if (page > 0) {
            window.scrollTo(0, 0);
            setPage(page - 1);
        }
    }

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onIndexChange = (e, save) => {
        getCategoryId(e.target.value)
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        searchEventByTitle()
    }

    async function onFilter(e) {
        e.preventDefault();
        searchEventsByCategory()
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

    async function searchEventByTitle() {
        try {
            const response = await allEventServices.getEventByTitle(searchEvent)

            if (!response.success) {
                toast("No se encontró el evento.", { type: 'warning' })
                throw new Error("Algo salió mal !!! :/")
            }

            toast("Evento encontrado", { type: 'success' })
            setEvents(response.data)
            setSearchedEvent('')
        } catch (error) {
            console.error({ error })
        }
    }

    async function searchEventsByCategory() {
        try {
            const response = await allEventServices.getEventsByCategory(category)

            if (!response.success) {
                toast("No se encontró el evento.", { type: 'error' })
                throw new Error("Algo salió mal !!! :/")
            } else if (response.data.length === 0) {
                toast("No hay eventos en la categoría seleccionada", { type: "info" })
            } else {
                toast("Eventos encontrados", { type: 'success' })
                setEvents(response.data)
            }

            setSearchedEvent('')
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-5xl">Eventos</h1>
            </div>
            <div className="grid md:grid-cols-2 p-4 mt-4 max-w-full">
                <form className="mx-4" onSubmit={onSubmit}>
                    <label
                        htmlFor="searchedEvent"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only">Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="search"
                            id="searchedEvent"
                            onChange={(e) => onChange(e, setSearchedEvent)}
                            value={searchEvent}
                            className="block w-full p-2.5 pl-10 md:mt-7 text-base text-penn-blue font-medium border border-gray-300 hover:border-pure-indigo rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-1.5 bg-pure-indigo hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                    </div>
                </form>
                <form action="" onSubmit={onFilter}>
                    <div className="relative w-72 md:w-1/2">
                        <p className='mb-2 font-medium text-dark-violet'>Filtrar por categoría: </p>
                        <Select id="eventCategory"
                            onChange={(e) => onIndexChange(e, setEventCategory)}
                            value={eventCategory}
                            className="relative md:w-72 mb-4 border border-dark-violet rounded-lg shadow-md text-dark-violet font-medium bg-white hover:border-violet-700 focus:ring-dark-violet focus:border-dark-violet">
                            <option > </option>
                            {categories.map((category) => {
                                return (
                                    <option key={category.id}> {category.category} </option>
                                )
                            })}
                        </Select>
                        <button type="submit" className="text-white absolute -right-24 md:-right-48 lg:-right-20 bottom-1.5 bg-pure-indigo hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filtrar</button>
                    </div>
                </form>
            </div>
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
            <EventAdminCard events={events} />
            <div className="text-center mx-auto">
                <button className='rounded-lg left-2 bg-gray-700 hover:bg-gray-400 w-32 h-10 p-2 mr-4 text-white md:text-sm my-auto font-montserrat' onClick={prev}>
                    <span><ArrowBackIcon /></span>  Anterior
                </button>
                <button className='rounded-lg left-2 bg-gray-700 hover:bg-gray-400 w-32 h-10 p-2 ml-4 text-white md:text-sm my-auto font-montserrat' onClick={next}>
                    Siguiente <span><ArrowForwardIcon /></span>
                </button>
            </div>
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar evento</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <EventsForm categories={categories} />
            </div>
            <Footer />
        </div>
    )
}

export default EventAdmin
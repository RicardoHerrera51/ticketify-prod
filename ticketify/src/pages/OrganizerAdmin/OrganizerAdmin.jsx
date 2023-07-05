import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import OrganizersForm from "../../components/OrganizersForm/OrganizersForm"
import OrganizersTable from "../../components/OrganizersTable/OrganizersTable"
import SearchBar from "../../components/SearchBar/SearchBar"
import { allInvolvedServices } from "../../services/InvolvedServices"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { allEventServices } from "../../services/EventServices"
import { ToastContainer } from "react-toastify"


const OrganizerAdmin = () => {

    const [page, setPage] = useState(0);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [organizers, setOrganizers] = useState([]);
    const [events, setEvents] = useState([])
    const [searchOrganizer, setSearchOrganizer] = useState('')

    useEffect(() => {
        const fetchOrganizers = async () => {
            try {
                const filters = { size: 10, page: page }
                const response = await allInvolvedServices.getAllInvolved(filters)

                setIsNextPageAvailable(response.isNextPageAvailable)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setOrganizers(response.items)
            } catch (error) {
                console.error({ error });
            }
        };
        fetchOrganizers();

        let fetchEvents = async () => {
            try {
                const filters = { title: '', size: 1000, page: page }
                const response = await allEventServices.getEvents(filters)

                setIsNextPageAvailable(response.isNextPageAvailable)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setEvents(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();
    }, [page]);

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

    async function onSubmit(e) {
        e.preventDefault();
        searchOrganizerById()
    }

    async function searchOrganizerById() {
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

    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
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
            <div className="grid grid-cols-1 mb-12 p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl">Organizadores</h1>
            </div>
            <OrganizersTable organizers={organizers} className="w-full max-w-full p-4" />
            <div className="text-center mx-auto mt-8">
                <button disabled={page == 0} className='rounded-full left-2 border border-pure-indigo bg-light-gray text-pure-indigo hover:bg-pure-indigo hover:text-white w-16 h-10 p-2 mr-4  md:text-sm my-auto font-montserrat' onClick={prev}>
                    <span><ArrowBackIcon /></span>
                </button>
                <button className='rounded-full left-2 border border-pure-indigo bg-light-gray text-pure-indigo hover:bg-pure-indigo hover:text-white w-16 h-10 p-2 ml-4 md:text-sm my-auto font-montserrat' onClick={next}>
                    <span><ArrowForwardIcon /></span>
                </button>
            </div>
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar organizador</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <OrganizersForm events={events} />
            </div>
            <Footer />
        </div>
    )
}

export default OrganizerAdmin
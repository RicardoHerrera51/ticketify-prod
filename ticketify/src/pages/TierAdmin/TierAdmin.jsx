import Footer from "../../components/Footer/Footer"
import TiersForm from "../../components/TiersForm/TiersForm"
import TierAdminCard from "../../components/TierAdminCard/TierAdminCard"
import { Select } from "flowbite-react"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import { useEffect, useState } from "react"
import { allTierServices } from "../../services/TierServices"
import { allEventServices } from "../../services/EventServices"
import { ToastContainer } from "react-toastify"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


const TierAdmin = () => {

    const [page, setPage] = useState(0);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [recharge, setRecharge] = useState(false);
    const [tiers, setTiers] = useState([]);
    const [searchedCategory, setSearchedCategory] = useState('');
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchTiers = async () => {
            try {
                const filters = { title: title, size: 10, page: page }
                let response = await allTierServices.getAllTiers(filters)

                if (searchedCategory !== '')
                    response = await allCategoryServices.getCategoryByName(searchedCategory)

                    setIsNextPageAvailable(response.isNextPageAvailable)
                    setTotalPages(response.totalPages)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setRecharge(false)
                setTiers(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchTiers();

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

    return (
        <div className="w-full max-w-full bg-light-gray">
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
            <NavbarAdmin />
            <div className="p-4 mb-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-5xl">Localidades</h1>
            </div>
            <TierAdminCard tiers={tiers} className="w-full max-w-full p-2" />
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar localidad</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <TiersForm events={events} />
            </div>
            <Footer />
        </div>
    )
}

export default TierAdmin